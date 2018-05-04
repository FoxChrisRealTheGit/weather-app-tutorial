import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import registerServiceWorker from './registerServiceWorker';
import reducers from "./ducks/reducers";


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
