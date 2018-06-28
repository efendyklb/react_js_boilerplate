import { combineReducers } from 'redux'

import {helloReducer} from './reducer/HelloReducer'
import {helloReducer2} from './reducer/HelloReducer2'

const rootReducer = combineReducers({
    helloReducer,
    helloReducer2
});

export default rootReducer;