import BaseReducer from '../../utils/BaseReducer';
import CartAction from './CartAction';


export default class CartReducer extends BaseReducer {

    initialState = {
        cartItem: null ,
    };

    [CartAction.REQUEST_GET_CART_FINISHED](state, action) {
        return {
            ...state,
            cartItem: action.payload,
        };
    }

}