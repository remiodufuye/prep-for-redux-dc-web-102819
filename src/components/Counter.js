
import React , {Component} from 'react'
import {connect} from 'react-redux' 

class Counter extends Component {

    decrement = (num) => {
        this.props.dispatch({type: "DECREMENT_COUNT", payload: num}) 
    };
  
    increment = (num) => {
        this.props.dispatch({type: "INCREMENT_COUNT", payload: num})
    };
  

    render() {
      return (
        <div className="Counter">
          <h1>{this.props.counterValue}</h1>
        <button onClick={()=>this.decrement(5)}> -5 </button>
        <button onClick={()=>this.decrement(1)}> - </button>
        <button onClick={()=>this.increment(1)}> + </button>
        <button onClick={()=>this.increment(3)}> +3 </button>
        <h3>{`The current count is less than ${ this.props.countValue + 5 - this.props.countValue % 5}`}</h3>
        </div>
      );
    }
  }

  const mapStateToProps = state => ({counterValue : state.count})

  export default connect(mapStateToProps)(Counter)  ;