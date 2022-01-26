import ActionUtility from '../../utils/ActionUtility';
import UserEffect from './UserEffect';

export default class UserAction {

    static REQUEST_GET_USER_DETAILS = 'REQUEST_GET_USER_DETAILS';
    static REQUEST_GET_USER_DETAILS_FINISHED = 'REQUEST_GET_USER_DETAILS_FINISHED';

    static _requestGetUserDetails(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, UserAction.REQUEST_GET_USER_DETAILS, UserEffect._requestGetUserDetails, request )
        }
    }

}