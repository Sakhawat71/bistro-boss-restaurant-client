import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {

    const { image, name, recipe, price, _id } = item;
    const user = useAuth();
    const navigate = useNavigate();

    const handelAddToCard = () => {

        if (user && user?.email) {
            console.log(name, " >--- ", _id, user?.email)
        }
        else {
            Swal.fire({
                title: "You are not Logged in",
                text: "You won't log in ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log in"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }

            });
        }

    }

    return (
        <div className="card bg-base-100 relative shadow-xl">
            <figure className="">
                <img src={image} alt="img" className="rounded-lg" />
            </figure>
            <p className='absolute py-2 px-4 rounded-xl right-4 top-4 text-white bg-gray-800'>${price}</p>
            <div className="card-body items-center text-center bg-[#F3F3F3] pb-4">
                <h2 className="card-title">{name}</h2>
                <p className='text-gray-500'>{recipe}</p>

                <button
                    onClick={handelAddToCard}
                    className='btn btn-outline border-b-4 hover:bg-white hover:text-black'
                >Add to Cart</button>

            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object,
};

export default FoodCard;