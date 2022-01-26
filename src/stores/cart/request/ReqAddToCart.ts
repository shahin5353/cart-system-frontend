import BaseRequestBody from '../../../models/BaseRequestBody';

export default class ReqAddToCart extends  BaseRequestBody {
    productId=0;
    constructor(data){
        super();
        this.update(data)
    }
}