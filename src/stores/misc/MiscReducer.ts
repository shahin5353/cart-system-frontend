import MiscAction from './MiscAction';
import BaseReducer from '../../utils/BaseReducer';

export default class MiscReducer extends BaseReducer {

    initialState = {
        modalStatus: null        
    };

    [MiscAction.SET_MODAL_STATUS](state, action) {
        return {
            ...state,
            modalStatus: action.payload,
        };
    }



}