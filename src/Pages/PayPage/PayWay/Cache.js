import React, { Component } from 'react';
import SignReceipt from './SignReceipt';
import './Cache.scss';

export default class Cache extends Component {
  constructor() {
    super();
    this.state = {
      isReceiept: false,
    };
  }

  onClick = e => {
    this.setState({
      isReceiept: e.target.id === 'cacheReceipt',
    });
  };

  render() {
    return (
      <div className="cacheBox">
        <p className="cache">현금영수증</p>
        <input
          type="radio"
          id="cacheReceipt"
          name="test"
          onClick={this.onClick}
        />
        <label htmlFor="cacheReceipt" className="cacheReceiptLabel">
          현금영수증 신청
        </label>
        <input
          type="radio"
          id="cacheReceiptNot"
          name="test"
          onClick={this.onClick}
          defaultChecked
        />
        <label htmlFor="cacheReceiptNot">신청안함</label>
        {this.state.isReceiept && <SignReceipt />}
      </div>
    );
  }
}
