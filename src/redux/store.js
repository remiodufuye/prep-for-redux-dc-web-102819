
import {createStore} from 'redux'
import reducer from './reducer'

  //reducer is automatically invoked once at the start of your app
  //reducer is also invoked everytime we call store.dispatch
  
  //const store = createStore(reducer)
  //.getState() -> read
  //.dispatch() -> update 

  export default createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ; 