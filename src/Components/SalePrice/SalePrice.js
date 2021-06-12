import React, { Component } from 'react';

class SalePrice extends Component {
  render() {
    const { price, discount } = this.props;
    return (
      <div className="item_discount info">
        {(price - price * 0.01 * discount).toLocaleString('en-US')}원
      </div>
    );
  }
}

export default SalePrice;
