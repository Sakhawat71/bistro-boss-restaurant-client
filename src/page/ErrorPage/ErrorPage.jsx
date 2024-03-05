import { Link } from 'react-router-dom';
import errorImg from '../../assets/404/404.gif'
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='bg-white'>
            <div className=' flex justify-center'>
                <Link 
                style={{ background: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)' }}
                className="btn btn-outline border-b-4 hover:bg-white text-white hover:text-white">Back To Home <FaHome></FaHome></Link>
            </div>
            <figure>
                <img
                    className='mx-auto'
                    src={errorImg}
                    alt="error page image" />
            </figure>

        </div>
    );
};

export default ErrorPage;