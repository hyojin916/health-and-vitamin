import React, { Component } from 'react';
import { totalPrice } from '../../../Functions/funcs';
import './PayOrder.scss';

export default class PayOrder extends Component {
  render() {
    const { productList, shippingFee } = this.props;
    return (
      <div className="payOrder">
        <div className="productList">
          {productList.map(product => {
            const { id, count, name, price, discount, image } = product;
            return (
              <div key={id} className="product">
                <img className="productImage" src={image} alt="productImage" />
                <div className="productDescription">
                  <p className="name">{name}</p>
                  <p className="count">
                    수량: <span className="countValue">{count}개</span>
                  </p>
                  <p className="price">
                    상품구매금액:
                    <span className="priceValue">{price.toLocaleString()}</span>
                    원
                  </p>
                  <p className="discount">
                    할인금액:
                    <span className="discountValue">
                      -{((price * discount) / 100).toLocaleString()}원
                    </span>
                  </p>
                  {totalPrice(productList) > shippingFee.minimum_free ? (
                    <p className="delivery">
                      [무료] / <span className="deliveryValue">기본배송</span>
                    </p>
                  ) : (
                    <p className="delivery">
                      <span className="deliveryValue">
                        [유료] /
                        <span className="deliveryValue">
                          {shippingFee.shipping_fee}원
                        </span>
                      </span>
                    </p>
                  )}
                </div>
                <button className="productDelBtn">X</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
