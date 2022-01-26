import React, { useEffect } from "react";
import TopNavBar from "../components/navigation/TopBar";
import './pagestyle.css';
import '../components/components.css';
import { makeSelectProductList } from "../../stores/product/ProductDataSelector";
import { useDispatch, useSelector } from "react-redux";
import FooterFixedBottom from "../components/navigation/FooterFixedBottom";
import ProductAction from "../../stores/product/ProductAction";
import ReqGetAllProduct from "../../stores/product/request/ReqGetAllProduct";
import { makeSelectUserDetails } from "../../stores/user/UserDataSelector";
import ProductCard from "../components/misc/card/ProductCard";
import { Col, Row } from 'antd';
import CartAction from "../../stores/cart/CartAction";
import ReqGetCart from "../../stores/cart/request/ReqGetCart";
import { selectFinished } from "../../stores/special/finished/FinishedSelector";

const HomePage = (props) => {
  const userDetails = useSelector((state) => makeSelectUserDetails(state));
  const productList = useSelector((state) => makeSelectProductList(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductAction._requestGetAllProduct(new ReqGetAllProduct()));
  }, []);
  const isFinishedAddToCart = useSelector((state) =>
    selectFinished(state, CartAction.REQUEST_ADD_TO_CART)
  );
  const isFinishedRemoveFromCart = useSelector((state) =>
    selectFinished(state, CartAction.REQUEST_REMOVE_FROM_CART)
  );
  const isFinishedResetFromCart = useSelector((state) =>
  selectFinished(state, CartAction.REQUEST_RESET_CART)
);
  useEffect(() => {
    if(userDetails.jwtToken){
      dispatch(CartAction._requestGetCart(new ReqGetCart()));
    }
  }, [userDetails,isFinishedAddToCart,isFinishedRemoveFromCart,isFinishedResetFromCart]);
  return (
    <>
      <div className="page-basic-container">
        <TopNavBar />
        <div className="product-container">
          <Row gutter={16}>
            {
              productList && productList.map(product => (
              <Col key={product.id} xl={{span:8}} lg={{span:12}} md={{span:24}} style={{marginBottom:'20px'}}>
                <ProductCard data={product} />
              </Col>
              ))
            }
          </Row>
        </div>
      </div>
      <FooterFixedBottom />
    </>
  );
};

export default HomePage;
