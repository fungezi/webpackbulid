import React from "react";
import Redux,{ createStore,applyMiddleware } from "redux";
import { Provider } from 'react-redux';

import ReactDom from "react-dom";
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import {syncHistoryWithStore} from "react-router-redux";
import reducers from "./reducers.js";
import Thunk from "redux-thunk";
import Slide from "./component/index.js";
var store = createStore(reducers,applyMiddleware(Thunk));//用法：两个参数（reducer,middleware）;
// var history = syncHistoryWithStore(browserHistory,store);
var history = browserHistory;
ReactDom.render(
	<Provider store = { store }>
		<Slide />
	</Provider>,document.getElementById('container'));
