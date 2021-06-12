import React, { Component } from 'react';
import './ProductCountBox.scss';

export default class ProductCountBox extends Component {
  inputOnChange = e => {
    const { id, updateItem, type } = this.props;
    let newCout = this.maxValueCheck(e.target.value);
    updateItem(type, newCout, id);
  };

  upClick = () => {
    const { count, updateItem, id, type } = this.props;
    let newCout = this.maxValueCheck(count * 1 + 1);
    updateItem(type, newCout, id);
  };

  downClick = () => {
    const { count, id, type, updateItem } = this.props;
    let newCout = this.maxValueCheck(count <= 1 ? 2 : count);
    updateItem(type, newCout * 1 - 1, id);
  };

  maxValueCheck = count => {
    const { stock } = this.props;

    if (count > stock) {
      count = stock;
      alert('최대 주문 수량입니다!');
    }
    return count;
  };

  xBtnOnClick = () => {
    const { id, type, deleteItem } = this.props;
    deleteItem(type, id);
  };

  calcPrice = () => {
    const { price, discount, count } = this.props;
    return discount
      ? (price - price * (discount / 100)) * (count ? count : 1)
      : price * (count ? count : 1);
  };

  render() {
    const { name, count } = this.props;
    const { inputOnChange, upClick, downClick, xBtnOnClick, calcPrice } = this;
    return (
      <div className="productCountBox">
        <span className="name">{name}</span>
        <div className="inputBox">
          <input
            className="input"
            type="number"
            value={count}
            onChange={inputOnChange}
          />
          <div className="arrowBox">
            <i className="fas fa-sort-up" onClick={upClick} />
            <i className="fas fa-sort-down" onClick={downClick} />
          </div>
          <p className="x" onClick={xBtnOnClick}>
            x
          </p>
        </div>
        <span className="price">{calcPrice()}원</span>
      </div>
    );
  }
}
