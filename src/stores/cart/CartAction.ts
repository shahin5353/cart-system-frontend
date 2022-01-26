import ActionUtility from '../../utils/ActionUtility';
import CartEffect from './CartEffect';
export default class CartAction {

    static REQUEST_GET_CART = 'REQUEST_GET_CART';
    static REQUEST_GET_CART_FINISHED = 'REQUEST_GET_CART_FINISHED';

    static REQUEST_ADD_TO_CART = 'REQUEST_ADD_TO_CART';
    static REQUEST_ADD_TO_CART_FINISHED = 'REQUEST_ADD_TO_CART_FINISHED';

    static REQUEST_REMOVE_FROM_CART = 'REQUEST_REMOVE_FROM_CART';
    static REQUEST_REMOVE_FROM_CART_FINISHED = 'REQUEST_REMOVE_FROM_CART_FINISHED';

    static REQUEST_RESET_CART = 'REQUEST_RESET_CART';
    static REQUEST_RESET_CART_FINISHED = 'REQUEST_RESET_CART_FINISHED';

    static _requestGetCart(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, CartAction.REQUEST_GET_CART, CartEffect._requestGetCart, request)
        }
    }

    static _requestAddToCart(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, CartAction.REQUEST_ADD_TO_CART, CartEffect._requestAddToCart, request)
        }
    }

    static _requestRemoveFromCart(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, CartAction.REQUEST_REMOVE_FROM_CART, CartEffect._requestRemoveFromCart, request)
        }
    }

    static _requestResetCart(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, CartAction.REQUEST_RESET_CART, CartEffect._requestResetCart, request)
        }
    }

}