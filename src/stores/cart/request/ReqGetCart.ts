import BaseRequestBody from '../../../models/BaseRequestBody';

export default class ReqGetCart extends  BaseRequestBody {
    
    constructor(data){
        super();
        this.update(data)
    }
}