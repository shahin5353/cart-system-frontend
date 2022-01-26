import EffectUtility from '../../utils/EffectUtility';
import BaseResponse from "../../models/BaseResponse";
import BaseRequestParams from "../../models/BaseRequestParams";
import {ApiEndpoint} from "../../assets/constants/ApiEndpoint";


export default class ProductEffect {

    static async _requestGetAllProduct(body) {
        const endPoint = ApiEndpoint.product.getAllProducts;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequestParams(body));
    }

}
