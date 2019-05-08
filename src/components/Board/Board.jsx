import React, { PureComponent } from 'react';
import propTypes from 'prop-types'
import {Cell}  from '../'
class Board extends PureComponent{

  static propTypes = {
    rows: propTypes.arrayOf(propTypes.arrayOf(propTypes.string))
  }
  static defaultProps = {
    rows: []
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  print_board = function (columns) {
    let n = columns.length, row = 0, col = 0
    let table = []
    let black = n%2 === 0;
    while (row < n) {
      let rowContent = []
      if(n%2 === 0) black = !black;
      while (col < n) {
        rowContent.push(<Cell black={black} Q={columns[row] === col}/>)
        col++
        black = !black;
      }
      table.push(rowContent);
      col = 0
      row++
    }
    return table;
  }
  render(){
    const {
      rows
    } = this.props;
    return(
      <div>
      <center>
      <table style={{borderStyle: 'solid'}}>
      <tbody>
      {this.print_board(rows).map(row =>
        <tr>{row}</tr>
      )}
      </tbody>
      </table>
      </center>
      </div>
    )
  }
}
export default Board;
