import React, { Component } from 'react';
import './ProductDescript.scss';

export default class ProductDescript extends Component {
  render() {
    const { name, price, discount, shipping_fee } = this.props;
    return (
      <div className="productDescript">
        <h2>{name}</h2>
        <p className="price">{price.toLocaleString()}</p>
        <div className="discountBox">
          <span className="discountTitle flexT">할인 판매가</span>
          <span className="discountValue flexC">
            <span className="discountPrice">
              {price - price * (discount / 100)}원
            </span>
            <span className="discountOption">
              &nbsp;({price * (discount / 100).toLocaleString()}원 할인)
            </span>
          </span>
        </div>
        <div className="deliveryBox">
          <span className="deliveryTitle flexT">배송비</span>
          <span className="deliveryContent flexC">
            <span className="deliveryPrice">
              {shipping_fee.toLocaleString()}원&nbsp;
            </span>
            <span className="deliveryOptioin">
              (20,000원 이상 구매 시 무료)
            </span>
          </span>
        </div>
      </div>
    );
  }
}
