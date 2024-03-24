import usePayment from "../../../hooks/usePayment";


const PaymentHistory = () => {

    const [paymet] = usePayment();
    console.log(paymet);

    return (
        <div>
            all payments
        </div>
    );
};

export default PaymentHistory;