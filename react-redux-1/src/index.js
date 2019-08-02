import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state, action) => {
  if (state === undefined) return { n: 0 };
  switch (action.type) {
    case 'add':
      return { n: state.n + action.payload };
    default:
      return state;
  }
};
const store = createStore(reducer);

/*
 * use redux
 */
// function render() {
//   ReactDOM.render(
//     <App value={store.getState()} store={store} />,
//     document.getElementById('root')
//   );
// }

// store.subscribe(render);
// render();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
