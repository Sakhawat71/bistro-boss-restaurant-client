import { Helmet } from "react-helmet-async";
import usePayment from "../../../hooks/usePayment";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";


const PaymentHistory = () => {

    const [payments,refetch] = usePayment();
    console.log(payments);
    refetch()
    
    return (
        <div className="mx-20">

            <SectionTitle
                subtitle={'At a Glance!'}
                mainTitle={'PAYMENT HISTORY'}
            ></SectionTitle>

            <Helmet title="Bistro | Payment History"></Helmet>
            <h2 className="font-bold text-2xl uppercase my-1">Total Payments: {payments?.length}</h2>

            <div className="overflow-x-auto ">

                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white uppercase font-semibold">
                        <tr>
                            <th>#</th>
                            <th>EMAIL</th>
                            <th>status</th>
                            <th>TOTAL PRICE</th>
                            <th>PAYENT DATE</th>
                        </tr>
                    </thead>


                    <tbody>

                        {payments?.map((payment, index) => <tr key={payment._id}>
                            <th>{index+1}</th>
                            <td>{payment?.email}</td>
                            <td>{payment?.status}</td>
                            <td>${payment?.price}</td>
                            <td>{payment?.transactionId}</td>
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;