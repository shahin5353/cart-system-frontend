import { createSelector } from 'reselect';
 
export const makeSelectProductList = createSelector(
    state => state.product.productList ,
    (allData ) =>(allData ? allData.data : [])
)