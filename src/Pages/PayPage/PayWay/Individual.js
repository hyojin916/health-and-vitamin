import React, { Component } from 'react';
import './Individual.scss';

export default class Individual extends Component {
  render() {
    return (
      <span className="individual">
        <select name="phoneNumber1" id="phoneNumber1">
          <option value="010">010</option>
          <option value="011">011</option>
          <option value="016">016</option>
          <option value="017">017</option>
          <option value="018">018</option>
          <option value="019">019</option>
        </select>
        &nbsp;-&nbsp;
        <input type="number" className="phoneNumber2" />
        &nbsp;-&nbsp;
        <input type="number" className="phoneNumber3" />
      </span>
    );
  }
}
