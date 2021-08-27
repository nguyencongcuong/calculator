import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { createStore } from "redux"

import './index.css';

import Calculator from "./Calculator"
import allReducers from "./reducers"

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <Calculator />
    </Provider>,
  document.getElementById('root')
);