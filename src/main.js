import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { ReduxAsyncConnect } from 'redux-async-connect';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

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

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

render(
	<Provider store={store} key="provider">
		{component}
	</Provider>,
	document.getElementById('main')
);
