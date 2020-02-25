import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './store/reducers'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import {watchLoadData} from "./store/saga";

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer,applyMiddleware(logger,sagaMiddleware));
sagaMiddleware.run(watchLoadData);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
