import BaseReducer from '../../../utils/BaseReducer'
import ResetAction from './ResetAction'

export default class ResetReducer extends BaseReducer {
    [ResetAction.RESET_STORAGE](state, action) {
        return {
            ...state,
            state: undefined
        }
    }
}