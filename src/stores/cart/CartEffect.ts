import EffectUtility from '../../utils/EffectUtility';
import BaseResponse from "../../models/BaseResponse";
import BaseRequestParams from "../../models/BaseRequestParams";
import {ApiEndpoint} from "../../assets/constants/ApiEndpoint";


export default class CartEffect {

    static async _requestGetCart(body) {
        const endPoint = ApiEndpoint.cart.getCart;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequestParams(body));
    }

    static async _requestAddToCart(body) {
        const endPoint = ApiEndpoint.cart.addToCart;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequestParams(body));
    }

    static async _requestRemoveFromCart(body) {
        const endPoint = ApiEndpoint.cart.removeFromCart;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequestParams(body));
    }

    static async _requestResetCart(body) {
        const endPoint = ApiEndpoint.cart.resetCart;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequestParams(body));
    }


}
