import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";


const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()
    const [errorMessage, setErrorMessage] = useState(null)
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId,setTransactionId] = useState('')
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart()
    const user = useAuth()
    console.log(cart);

    const totelPrice = cart.reduce((price, item) => { return price + item.price }, 0)

    useEffect(() => {
        axiosSecure.post('/api/v1/create-payment-intent', { price: totelPrice })
            .then(res => {
                console.log(res.data.clientSecret); // clg
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, totelPrice])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setTransactionId('')

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }


        // create Payment Method

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log(error);
            setErrorMessage(error.message)
        }
        else {
            setErrorMessage(null)
            console.log("paymentMethod", paymentMethod);
        }

        // confirm Card Payment

        const { paymentIntent, error: confiremError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous_name',
                    email: user?.email || 'anonymous_email',
                }
            }
        })

        if (confiremError) {
            console.log(confiremError);
            // setErrorMessage(confiremError.message)
        }
        else {
            console.log('paymentIntent', paymentIntent);
            if(paymentIntent.status === "succeeded"){
                setTransactionId(paymentIntent.id)
                
                const payment = {
                    email : user?.email,
                    price : totelPrice,
                    itemIds : cart.map(item => item._id),
                    menuIds : cart.map(item => item.menuId),
                    status : 'panding',
                }

                const res = await axiosSecure.post('/api/payment-details', payment)
                console.log('res data: ', res.data.data);

                console.log(payment);
            }
        }
        

    };

    return (

        <div>
            <div className="mb-10 text-2xl font-bold">
                <p>Total : ${totelPrice}</p>
            </div>

            <form onSubmit={handleSubmit}>

                <CardElement
                    ptions={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <div className=" flex my-5">
                    <button className="btn btn-outline w-1/2 mx-auto" type="submit" disabled={!stripe}>
                        Pay
                    </button>

                </div>

                {/* Show error message */}
                {errorMessage && <div className="text-center text-red-600">{errorMessage}</div>}

                {transactionId && <div className="text-center">Your Transaction ID: <span className="text-green-600">{transactionId}</span> </div>}

            </form>
        </div>

    );
};


export default CheckoutForm;