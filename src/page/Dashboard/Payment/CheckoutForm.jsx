import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()
    const [errorMessage, setErrorMessage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

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
    };



    return (
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

            {/* Show error message to your customers */}
            {errorMessage && <div className="text-center text-red-600">{errorMessage}</div>}

        </form>
    );
};


export default CheckoutForm;