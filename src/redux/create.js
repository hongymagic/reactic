import { createStore as _createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';

import reducer from './reducer';

export default function createStore(history) {
	const middleware = [];

	middleware.push(createLogger({ collapsed: true, duration: true }));
	middleware.push(routerMiddleware(history));

	return _createStore(reducer, applyMiddleware(...middleware));
}
