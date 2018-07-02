import rootReducer from "./CombineReducer";
//import { watcherSaga } from "./flux/watcher/HelloWatcher";
import AllWatcher from './watcher/AllWatcher'

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import persistConfig from './config/PersistConfig'
//import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

/** redux persist */
import { persistStore, persistReducer } from 'redux-persist';

import persistCrosstab from './PersistCrossTab'

const pReducer = persistReducer(persistConfig, rootReducer);

/** middleware */

const sagaMiddleware = createSagaMiddleware();
/*const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();*/

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__();
    if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
        devTools = a => a;
    }

const FinalStore = createStore(
    pReducer, //hello file
    compose(
        applyMiddleware(
            sagaMiddleware
        )
    ),
    devTools // di mattiin dlu
);

persistCrosstab(FinalStore, persistConfig, {
    whitelist: ['helloReducer2'], // Reducers to persist crosstab.
  })


//sagaMiddleware.run(watcherSaga); // hello watcher file single
sagaMiddleware.run(AllWatcher); // hello watcher file ini kumpulan worker

//run session

export const store = FinalStore;
export const persistor = persistStore(FinalStore);