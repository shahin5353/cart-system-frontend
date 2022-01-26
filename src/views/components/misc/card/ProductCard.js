import React, { useEffect, useState } from 'react'
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, MinusOutlined, PlusOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { makeSelectCartItem } from '../../../../stores/cart/CartDataSelector';
import { useDispatch, useSelector } from 'react-redux';
import CartAction from '../../../../stores/cart/CartAction';
import ReqAddToCart from '../../../../stores/cart/request/ReqAddToCart';
import ReqRemoveFromCart from '../../../../stores/cart/request/ReqRemoveFromCart';

const { Meta } = Card;

const ProductCard = ({ data }) => {
  const cartItems = useSelector((state) => makeSelectCartItem(state));
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false)
  useEffect(() => {
    let isAdded = cartItems?.items?.find((item) => item.productId === data.id);
    setAddedToCart(isAdded)
  }, [cartItems])
  const addToCart = () => {
    dispatch(CartAction._requestAddToCart(new ReqAddToCart({ productId: data.id })));
  }
  const removeFromCart = () => {
    dispatch(CartAction._requestRemoveFromCart(new ReqRemoveFromCart({ productId: data.id })));
  }
  return (
    <Card
      style={{ width: 300 }}
      bordered={true}
      cover={
        <img
          alt="product-image"
          src={data.image}
        />
      }
      actions={
        addedToCart ?
          [<span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', fontSize: '18px', fontWeight: 600 }}>
            <PlusOutlined onClick={addToCart} />
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <ShoppingCartOutlined style={{ fontSize: '20px', color: '', marginRight: '10px' }} />
              {addedToCart.quantity}
            </span>
            <MinusOutlined onClick={removeFromCart} />
          </span>
          ]
          :
          [<span onClick={addToCart} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 500 }}><ShoppingCartOutlined title={'Add To Cart'} style={{ fontSize: '32px', color: '', marginRight: '10px' }} />Add To Cart</span>]
      }
    >
      <Meta
        title={data.name}
        description={data.description.substring(0, 30) + '...'}
      />
      <p style={{ fontSize: '16px', fontWeight: '600', textAlign: 'center', margin: '10px 0px 0px 0px' }}>{data.price} BDT</p>
    </Card>
  )
}
export default ProductCard;