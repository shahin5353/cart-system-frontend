import React from "react";
import { withRouter,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./navigation.css";
import CaretDownOutlined from '@ant-design/icons/CaretDownOutlined'
import { Popover, Button } from "antd";
import { makeSelectUserDetails } from "../../../stores/user/UserDataSelector";
import ResetAction from "../../../stores/special/reset/ResetAction";
import { setCookie } from "../../../assets/function/CustomFunction";
import '../../pages/pagestyle.css'
import { AppRoutes } from "../../../assets/constants/routes";

function TopBar(props) {
  const userDetails = useSelector((state) => makeSelectUserDetails(state));
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(ResetAction.resetStorage());
    localStorage.clear();
    setCookie("jwtToken", "");
    window.location.reload();
  };
  return (
    <div className="container-app-topbar">
      <div className="brand-block">
        <div className="brand-image">
          <img src="images/nib-logo.png" alt="nib-logo" height="50" />
        </div>
        <div className="brand-title">
          <h3>National Institute of Biotechnology</h3>
          <h5>Data Entry Platform: HMGCR GENE SNP Analysis</h5>
        </div>
      </div>
     {
       userDetails.jwtToken?
       <Popover
       placement="bottomRight"
       content={
         <Button className="signout-btn" onClick={() => signOut()}>
           Logout
         </Button>
       }
       trigger="click"
     >
       <div className="pop-over-block">
         <div>
           <p>Logged in as</p>
           <h4 style={{display:'flex', alignItems:'center'}}>{userDetails.userDetails.email} <CaretDownOutlined style={{fontSize:'20px'}}/></h4>
         </div>
       </div>
     </Popover>
     :
     <Link to={AppRoutes.LOGIN}>
        <Button className="signout-btn">
     Login
      </Button>
     </Link>
     }
    </div>
  );
}

export default withRouter(TopBar);
