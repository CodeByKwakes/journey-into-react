//==================
// Here we import the react component again and then
// the new dependencie reactdom that actually renders
// the application onto the screen.
//==================
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import reduxThunk from 'redux-thunk'
import { Router, browserHistory } from 'react-router';
import reducers from './reducers/index'

//==================
// Here we want to import our stylesheets so that
// webpack knows to grab it and compile it.
//==================
require('./assets/stylesheets/base.scss');
require('./assets/stylesheets/lemonade.scss');
require('./assets/stylesheets/navigation.scss');

//==================
// Now we replace our App component with the routes component
// and substitute it into the function below
//==================
// import App from './components/app'

import routes from './routes';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers);

//==================
// This command actually renders the component into
// the element with the id #app which we added in
// the index.html file. Instead of serving the <app /> like we did previously
// we now serve the Router we defined in the router.js file. 
//==================
// ReactDom.render( <App />, document.querySelector('#app'))
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('#app')
);
