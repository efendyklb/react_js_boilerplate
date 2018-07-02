import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";

import { store, persistor} from "./services/flux/Store";
import { PersistGate } from 'redux-persist/lib/integration/react';

/** hello file */
import MainRouter from './routes/MainRouter'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <MainRouter/>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

if ((typeof window !== 'undefined' && window.location.protocol === 'https:') || window.location.hostname === 'localhost' ) {
    registerServiceWorker();
    console.log('service worker started')
}

// allow from http
// open -a Google\ Chrome --args --user-data-dir=/tmp/chrome --unsafely-treat-insecure-origin-as-secure=http://slka.local