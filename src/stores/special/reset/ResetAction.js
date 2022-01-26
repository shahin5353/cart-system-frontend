import ActionUtility from "../../../utils/ActionUtility"

export default class ResetAction {
    static RESET_STORAGE = 'RESET_STORAGE'
    static RESET_FINISHED_REDUCER = 'RESET_FINISHED_REDUCER'

    static resetStorage() {
        return ActionUtility._createAction(ResetAction.RESET_STORAGE)
    }
}

