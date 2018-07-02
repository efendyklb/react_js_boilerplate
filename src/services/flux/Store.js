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

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const FinalStore = createStore(
    pReducer, //hello file
    composeEnhancers(
        applyMiddleware(
            sagaMiddleware
        )
    )
);

persistCrosstab(FinalStore, persistConfig, {
    whitelist: ['helloReducer2'], // Reducers to persist crosstab.
  })


//sagaMiddleware.run(watcherSaga); // hello watcher file single
sagaMiddleware.run(AllWatcher); // hello watcher file ini kumpulan worker

//run session

export const store = FinalStore;
export const persistor = persistStore(FinalStore);