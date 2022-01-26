import BaseReducer from '../../utils/BaseReducer';
import ProductAction from './ProductAction';


export default class ProductReducer extends BaseReducer {

    initialState = {
        productList: null ,
    };

    [ProductAction.REQUEST_GET_ALL_PRODUCT_FINISHED](state, action) {
        return {
            ...state,
            productList: action.payload,
        };
    }

}