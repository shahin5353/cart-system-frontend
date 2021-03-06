import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import ErrorReducer from './special/error/ErrorReducer';
import RequestingReducer from './special/requesting/RequestingReducer';
import ToastsReducer from './special/toasts/ToastsReducer';
import FinishedReducer from "./special/finished/FinishedReducer";
import UserReducer from './user/UserReducer';
import ProductReducer from './product/ProductReducer';
import CartReducer from './cart/CartReducer';

export default (history) => {
    const reducerMap = {
        error: ErrorReducer.reducer,
        requesting: RequestingReducer.reducer,
        finished: FinishedReducer.reducer,
        router: connectRouter(history),

        toasts: new ToastsReducer().reducer,

        user : new UserReducer().reducer,
        product : new ProductReducer().reducer,
        cart : new CartReducer().reducer
       
    };

    return combineReducers(reducerMap);
};
