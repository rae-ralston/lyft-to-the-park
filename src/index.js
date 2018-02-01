import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index'

let store = createStore(rootReducer)
// store.subscribe(() => console.log('store ==>', store.getState()))

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider> ,
  document.getElementById('root')
);
registerServiceWorker();
