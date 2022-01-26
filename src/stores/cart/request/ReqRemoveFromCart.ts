import BaseRequestBody from '../../../models/BaseRequestBody';

export default class ReqRemoveFromCart extends  BaseRequestBody {
    productId=0;
    constructor(data){
        super();
        this.update(data)
    }
}