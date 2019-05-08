import React, { PureComponent } from 'react';
import propTypes from 'prop-types'

class Selector extends PureComponent{
  static propTypes = {
    updateN: propTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({number: event.target.value});
  }

  handleSubmit(event) {
    const {
      updateN
    } = this.props;
    const {
      number
    } = this.state;
    // eslint-disable-next-line
    number >= 30 ? alert('This may take a while') : null;
    updateN(number);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          N:
          <input name="number" type="text" value={this.state.number} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default Selector;
