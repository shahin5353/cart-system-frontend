import EffectUtility from '../../utils/EffectUtility';
import BaseResponse from "../../models/BaseResponse";
import BaseRequestParams from "../../models/BaseRequestParams";
import {ApiEndpoint} from "../../assets/constants/ApiEndpoint";


export default class UserEffect {

    static async _requestGetUserDetails(body) {
        const endPoint = ApiEndpoint.user.getUserDetails;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequestParams(body));
    }

  
}
