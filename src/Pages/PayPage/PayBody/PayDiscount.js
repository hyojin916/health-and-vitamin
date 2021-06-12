import React, { Component } from 'react';
import './PayDiscount.scss';

export default class PayDiscount extends Component {
  render() {
    return (
      <>
        <div className="payDiscount">
          <div className="contentHeader">
            <span className="autoDiscount">자동 할인</span>
            <span className="option">(보유쿠폰 1개)</span>
          </div>
          <div className="discountBox">
            <span className="discountValue">32,100원</span>
            <button className="discountBtn">할인 내역</button>
          </div>
        </div>
        <div className="payDiscount">
          <div className="contentHeader">
            <span className="autoDiscount">자동 할인</span>
            <span className="option">(보유쿠폰 1개)</span>
          </div>
          <div className="discountBox">
            <span className="discountValue">32,100원</span>
            <button className="discountBtn">할인 내역</button>
          </div>
        </div>
        <div className="payDiscount">
          <div className="contentHeader">
            <span className="autoDiscount">자동 할인</span>
            <span className="option">(보유쿠폰 1개)</span>
          </div>
          <div className="discountBox">
            <span className="discountValue">32,100원</span>
            <button className="discountBtn">할인 내역</button>
          </div>
        </div>
      </>
    );
  }
}
