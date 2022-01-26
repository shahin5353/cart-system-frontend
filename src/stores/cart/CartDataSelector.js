import { createSelector } from 'reselect';
 
export const makeSelectCartItem = createSelector(
    state => state.cart.cartItem ,
    (allData ) =>(allData ? allData.data[0] : [])
)