import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/OtherPages/Loading/Loading';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        <Loading></Loading>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{ form: location }} replace></Navigate>
};

export default PrivetRoute;