import React, { PureComponent } from 'react';
import propTypes from 'prop-types'
import queen_black from './queen_black.svg'
class Cell extends PureComponent{
  static propTypes = {
      black: propTypes.bool.isRequired,
      Q: propTypes.bool.isRequired
  }
  static defaultProps = {

  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    const {
      Q,
      black
    } =this.props;
    return(
      <td style={{backgroundColor:(black ? 'brown' : 'white'), minHeight:'50px', minWidth:'50px'}}>
        {Q ? <img alt="Queen" style={{color: (black ? 'white' : 'black') }} src={queen_black}/> : '' }
      </td>
    )
  }
}
export default Cell;
