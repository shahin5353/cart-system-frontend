import BaseRequestBody from './BaseRequestBody';
export default class BaseRequestParamsWithoutJwt{
    data = new BaseRequestBody() ;
    headers = {
        'accept-language': "en",
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    constructor(data){
        if(data)this.data = data;
        
    }
}
