import { getCookie } from '../assets/function/CustomFunction';
import BaseRequestBody from './BaseRequestBody';
export default class BaseRequestParams{
    data = new BaseRequestBody() ;
    headers = {
        'Access-Control-Allow-Origin': '*',
        'accept-language': "en",
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    constructor(data){
        if(data)this.data = data;
        this.headers.jwtTokenHeader = getCookie('jwtToken')
    }
}
