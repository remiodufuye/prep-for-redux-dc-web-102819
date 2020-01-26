

import React  from 'react'
import logo from '../logo.svg';
import {connect} from 'react-redux'

const Header = (props) => {
        return (
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" /> 
            <h1 className="App-title" style={{color: props.color}}>Welcome to React</h1>
            </header>
      );
  }

  const mapStateToProps = state => ({countValue: state.count})

  export default  connect(mapStateToProps)(Header)  ; 

  
  //  const withBlue = (SimpleComponent) => {
  //   class BetterComponent extends React.Component {
  //      render(){
  //        return <SimpleComponent color="red"/> 
  //      }
  //    }
  //    return BetterComponent 
  //  }
  
  //  const BlueHeader = withBlue(Header)
  //  const BetterHeader = withRouter(Header)
  //  const BetterComponent = func(AComponent)
  