import { all, takeLatest } from 'redux-saga/effects'

import { workerSaga } from './HelloWatcher';

export default function* AllWatcher()
{
    // kalo pake all dimasukin langsung aja worker nya
    yield all([
        takeLatest("API_CALL_REQUEST", workerSaga)
    ]);
}


/**
 * redux saga takeLatest vs takeEvery :

takeEvery allows multiple fetchData instances to be started concurrently. 
Unlike takeEvery, takeLatest allows only one fetchData task to run at any moment. And it will be the latest started task. If a previous task is still running when another fetchData task is started, the previous task will be automatically cancelled.


Read more at http://helabenkhalfallah.e-monsite.com/blog/react/redux-saga-takelatest-vs-takeevery.html#8Jf0YCjiqIIptSpo.99
 */