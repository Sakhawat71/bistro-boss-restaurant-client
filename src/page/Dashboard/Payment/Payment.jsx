import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)

const Payment = () => {



    const options = {
        mode: 'payment',
        amount: 1099,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
    };


    return (
        <div className="px-20 mt-20">
            <h1 className="text-2xl font-bold text-center my-10">PAYMENT</h1>
            <div>
                <Elements stripe={stripePromise} options={options} >
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};


export default Payment;