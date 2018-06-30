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
registerServiceWorker();
