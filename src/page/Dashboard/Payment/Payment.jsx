import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)

const Payment = () => {

    return (
        <div className="px-20 mt-20">
            <Helmet title="Bistro | Payment"></Helmet>
            <h1 className="text-2xl font-bold text-center my-10">PAYMENT</h1>
            <div className="">
                <Elements stripe={stripePromise}  >
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};


export default Payment;