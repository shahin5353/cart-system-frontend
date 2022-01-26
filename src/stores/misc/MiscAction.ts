import ActionUtility from '../../utils/ActionUtility';
import ModalStateModel from './model/ModalStateModel';
import { ModalTypeConstants } from '../../assets/constants/GeneralConstants';

export default class MiscAction {


    static SET_MODAL_STATUS = 'SET_MODAL_STATUS';


    static _showModalSuccess(message,okLink,topIcon) {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_SUCCESS, true, { message,okLink,topIcon }))
    }

    static _showModalFailure(message,okLink,topIcon) {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_ERROR, true, { message,okLink,topIcon }))
    }
    static _showModalInfo(message,okLink,topIcon) {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_INFO, true, { message,okLink,topIcon }))
    }
    static _showModalWarning(message,okLink,topIcon) {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_WARNING, true, { message,okLink,topIcon }))
    }

    static _setModalStatus(modalData) {
        return ActionUtility._createAction(MiscAction.SET_MODAL_STATUS, modalData);
    }
}