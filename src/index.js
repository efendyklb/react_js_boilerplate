import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";

import { store, persistor} from "./services/Store";
import { PersistGate } from 'redux-persist/lib/integration/react';

/** hello file */
import HelloRouter from './package/hello/HelloRouter'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <HelloRouter/>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
