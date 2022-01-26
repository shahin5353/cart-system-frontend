import ActionUtility from '../../utils/ActionUtility';
import ProductEffect from './ProductEffect';
export default class ProductAction {

    static REQUEST_GET_ALL_PRODUCT = 'REQUEST_GET_ALL_PRODUCT';
    static REQUEST_GET_ALL_PRODUCT_FINISHED = 'REQUEST_GET_ALL_PRODUCT_FINISHED';

    static _requestGetAllProduct(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ProductAction.REQUEST_GET_ALL_PRODUCT, ProductEffect._requestGetAllProduct, request )
        }
    }

}