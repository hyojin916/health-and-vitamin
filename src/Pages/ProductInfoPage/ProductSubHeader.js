import React, { Component } from 'react';
import './ProductSubHeader.scss';

export default class ProductSubHeader extends Component {
  render() {
    return (
      <div className="productSubHeader">
        <span className="title">추가구성상품</span>
        <span className="content">추가로 구매를 원하시면 선택하세요</span>
      </div>
    );
  }
}
