import PropTypes from 'prop-types';
import useAdmin from '../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { HashLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {

    const [isAdmin,isAdminLoading] = useAdmin();
    const { loading ,user} = useContext(AuthContext);
    const navigate = useNavigate()

    if (loading || isAdminLoading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <HashLoader color="#36d7b7" />
            </div>
        )
    }
    
    if (user && isAdmin) {
        return children;
    }
    
    return navigate("/")
};

AdminRoute.propTypes = {
    children: PropTypes.node,
};

export default AdminRoute;