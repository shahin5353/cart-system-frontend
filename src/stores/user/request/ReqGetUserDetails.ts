import BaseRequestBody from '../../../models/BaseRequestBody';

export default class ReqGetUserDetails extends  BaseRequestBody {
    email = '';
    password = '';

    constructor(data){
        super();
        this.update(data)
    }
}