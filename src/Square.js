import React from 'react';
import PropTypes from 'prop-types';

export default class Square extends React.Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    onChange : PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  render() {
    // this regex verifies only numerical values are entered
    const re = /^[0-9\b]+$/;
    return (
      <input type = "text"
        inputMode = "numeric"
        className="square"
        maxLength= "1"
        value={this.props.value}
        onChange={(squareID) => 
          {if (squareID.target.value === '' || re.test(squareID.target.value)) {
                   this.props.onChange(squareID.target.value)}}}
      />
    );
  }
}