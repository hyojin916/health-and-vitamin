import React, { Component } from 'react';
import './PayInfo.scss';

export default class PayInfo extends Component {
  render() {
    return (
      <div className="payInfo">
        <div className="contentBox">
          <p className="content">
            <span>주문상품</span> <span>83,800원</span>
          </p>
          <p className="content">
            <span>할인/부가결제</span> <span>-32,100원</span>
          </p>
          <p className="content">
            <span>배송비</span> <span>+0원</span>
          </p>
        </div>
        <p className="result">
          <span className="resultTitle">결제금액</span>{' '}
          <span className="resultValue">51,700원</span>
        </p>
      </div>
    );
  }
}
