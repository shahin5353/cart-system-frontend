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

const HomePage = (props) => {
  const userDetails = useSelector((state) => makeSelectUserDetails(state));
  const productList = useSelector((state) => makeSelectProductList(state));
  console.log("P", productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductAction._requestGetAllProduct(new ReqGetAllProduct()));
  }, []);
  useEffect(() => {
    if(userDetails.jwtToken){
      dispatch(CartAction._requestGetCart(new ReqGetCart()));
    }
  }, [userDetails]);
  return (
    <>
      <div className="page-basic-container">
        <TopNavBar />
        <div className="product-container">
          <Row gutter={16}>
            {
              productList.map(product => (
                <Col span={8}>
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
