import BaseReducer from '../../utils/BaseReducer';
import UserAction from './UserAction';


export default class UserReducer extends BaseReducer {

    initialState = {
        userDetails: null
    };

    [UserAction.REQUEST_GET_USER_DETAILS_FINISHED](state, action) {
        return {
            ...state,
            userDetails: action.payload,
        };
    }


}