import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer';
import errorToastMiddleware from './special/error/ErrorToastMiddleware';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "silicon-orchard",
    storage: storage,
    whitelist: ['user','cart']
};


export default (initialState, history) => {

    const tempReducer = rootReducer(history)
    const persistedReducer = persistReducer(persistConfig, tempReducer);

    const store = createStore(persistedReducer, initialState,
        applyMiddleware(
            thunk,
            routerMiddleware(history),
            errorToastMiddleware(),
        ));
    let persistor = persistStore(store)
    return { store, persistor };
};

