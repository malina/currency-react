import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = localStorage.getItem('appState') ? JSON.parse(localStorage.getItem('appState')) : {}

const store = createStore(reducers, initialState, applyMiddleware(thunk));

store.subscribe(()=>{
  localStorage.setItem('appState', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
