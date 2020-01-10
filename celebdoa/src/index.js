import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


const AppWithRouter = withRouter(App);

ReactDOM.render(
	<Router>
		<AppWithRouter />
	</Router>,
    document.getElementById('root')
);