import React, { Component } from 'react';
import place_next_queen from './algo/backtracking';
import {Board, Selector} from './components'
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      n: 4,
      runTime: 0
    }
    this.computeQueens = this.computeQueens.bind(this);
    this.updateN = this.updateN.bind(this);
  }
  updateN = (num) => {
    this.setState({n:num})
  }
  computeQueens = (n) => {
    let t1 =  new Date().getTime();
    let result = place_next_queen(n,n)
    let t2 =  new Date().getTime();
    let time = t2-t1;
    alert("Computed N queens Runtime: " + time + " Milliseconds" )
    return result;
  }
  render() {
    const {
      n
    } = this.state
    // console.log(place_next_queen(5,5))
    return (
      <div className="App">
        <Selector updateN={this.updateN}/>
        <h1>{n} Queens</h1>
        <Board rows={this.computeQueens(n)}/>
      </div>
    );
  }
}

export default App;
