import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AppRoutes} from '../../../assets/constants/routes'
import { useSelector } from 'react-redux';
import { makeSelectUserDetails } from '../../../stores/user/UserDataSelector';
import { getCookie, setCookie } from '../../../assets/function/CustomFunction';


const PublicRoute = ({component: Component, restricted, ...rest}) => {
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
    const params = new URLSearchParams(rest.location.search)
    const redirectPath = params.get('redirect_path')
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            loadingUser?<></>:
            userDetails && userDetails.jwtToken && restricted ?
                <Redirect to={redirectPath?redirectPath:AppRoutes.DEFAULT} />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;