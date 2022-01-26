import React, { useState } from "react";
import { withRouter,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./navigation.css";
import CaretDownOutlined from '@ant-design/icons/CaretDownOutlined'
import { Popover, Button, Drawer, Card } from "antd";
import { makeSelectUserDetails } from "../../../stores/user/UserDataSelector";
import ResetAction from "../../../stores/special/reset/ResetAction";
import { setCookie } from "../../../assets/function/CustomFunction";
import '../../pages/pagestyle.css'
import { AppRoutes } from "../../../assets/constants/routes";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { makeSelectCartItem } from "../../../stores/cart/CartDataSelector";
import CartAction from "../../../stores/cart/CartAction";
import ReqGetCart from "../../../stores/cart/request/ReqGetCart";

function TopBar(props) {
  const userDetails = useSelector((state) => makeSelectUserDetails(state));
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(ResetAction.resetStorage());
    localStorage.clear();
    setCookie("jwtToken", "");
    window.location.reload();
  };
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const cartItems = useSelector((state) => makeSelectCartItem(state));
  const resetCart = ()=>{
    dispatch(CartAction._requestResetCart(new ReqGetCart()))
  }
  return (
    <div className="container-app-topbar">
      <div className="brand-block">
        <div className="brand-title">
          <h3>Cart System</h3>
        </div>
        <span className="see-cart" onClick={showDrawer}><ShoppingCartOutlined /> See Cart Items</span>
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
      <Drawer title="Cart Details" placement="right" onClose={onClose} visible={visible}>
        {
          cartItems?
          <>
          {
             cartItems?.items?.map((item)=>(
              <div className="cart-item-container">
                 <p className="item-title">Title: {item.productDetails.name}</p>
                 <p className="item-price">Price: {`${item.productDetails.price} BDT X ${item.quantity}`}</p>
              </div>
             ))
          }
          <p className="cart-total-price">Total Price : {cartItems?.items?.reduce((a,b) => a + b.productDetails.price, 0)}</p>
          <div style={{textAlign:'center'}}><Button onClick={resetCart} type="danger"><DeleteOutlined/>Reset Cart</Button></div>
          </>
          :
          <h3>You didn't added any item yet.</h3>
        }
      </Drawer>
    </div>
  );
}

export default withRouter(TopBar);
