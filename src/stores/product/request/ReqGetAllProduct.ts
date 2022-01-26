import BaseRequestBody from '../../../models/BaseRequestBody';

export default class ReqGetAllProduct extends  BaseRequestBody {
    
    constructor(data){
        super();
        this.update(data)
    }
}