import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AppRoutes} from '../../../assets/constants/routes'
import { useSelector } from 'react-redux';
import { makeSelectUserDetails } from '../../../stores/user/UserDataSelector';
import { getCookie, setCookie } from '../../../assets/function/CustomFunction';

const PrivateRoute = ({component: Component, ...rest}) => {
    const userDetails = useSelector((state) => makeSelectUserDetails(state));
    const [loadingUser, setLodingUser] = useState(true);
    const updateState = async ()=>{
        if(getCookie('jwtToken')==='undefined' || !getCookie('jwtToken')){
            await setCookie('jwtToken', userDetails.jwtToken)
        }
        setLodingUser(false)
    }
    useEffect(()=>{
        if(userDetails){
            updateState()
        }
    },[userDetails])
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            loadingUser?
            <></>
            :
            userDetails && userDetails.jwtToken ?
                <Component {...props} />
            : <Redirect  to={`${AppRoutes.LOGIN}?redirect_path=${rest.path}`} />
        )} />
    );
};

export default PrivateRoute;