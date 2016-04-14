import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { ReduxAsyncConnect } from 'redux-async-connect';
import { syncHistoryWithStore } from 'react-router-redux';

import getRoutes from './routes';
import createStore from './redux/create';

const store = createStore(browserHistory);
history = syncHistoryWithStore(browserHistory, store);

const component = (
	<Router
		render={(props) => <ReduxAsyncConnect {...props} filter={item => !item.deferred} />}
		history={browserHistory}
	>
		{getRoutes(store)}
	</Router>
);

render(
	<Provider store={store} key="provider">
		{component}
	</Provider>,
	document.getElementById('main')
);
