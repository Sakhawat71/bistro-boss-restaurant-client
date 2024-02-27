import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';

const PrivetRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <HashLoader color="#36d7b7" />
            </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate to={"/login"} state={{from: location}} replace></Navigate>
};

PrivetRouter.propTypes = {
    children: PropTypes.node,
};

export default PrivetRouter;