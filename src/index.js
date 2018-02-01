import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let defaultState = {
  isModalOpen: false,
}

const TOGGLE_REQUEST_MODAL = 'TOGGLE_REQUEST_MODAL'

//actions
export function toggleRequestModal() {
  return {
    type: TOGGLE_REQUEST_MODAL
  }
}
//reducer
function reducer (state = defaultState, action) {
  console.log('in reducer', action)
  switch (action.type) {
    case TOGGLE_REQUEST_MODAL:
      console.log('in TOGGLE_REQUEST_MODAL')
      return { ...state, isModalOpen: !state.isModalOpen }
    default:
      return state
  }
}

//combine reducer
let store = createStore(reducer)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider> ,
  document.getElementById('root')
);
registerServiceWorker();
