import React, { Component } from 'react';
import './ProductInfoHeader.scss';

export default class ProductInfoHeader extends Component {
  render() {
    return (
      <div className="productInfoHeader">
        <ol>
          <li>
            <i className="fas fa-home" />
            <span> &nbsp;&gt; PRODUCT </span>
          </li>
        </ol>
      </div>
    );
  }
}
