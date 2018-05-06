import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'store/features/reducers';
import thunk from 'redux-thunk';
import './src/index.less';
import App from 'components/App';

/*
As you can see, there's no middleware included here.
So to make things a little easier for you I've added the redux-devtools-extension.
documentation found here: https://github.com/zalmoxisus/redux-devtools-extension
*/
const composeEnhancers  = composeWithDevTools(applyMiddleware(thunk))
let store = createStore(rootReducer, composeEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
