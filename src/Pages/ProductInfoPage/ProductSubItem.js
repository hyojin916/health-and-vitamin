import React, { Component } from 'react';
import './ProductSubItem.scss';

export default class ProductSubItem extends Component {
  optionSelectOnChange = e => {
    if (e.target.options.selectedIndex) {
      this.props.addSubItemList(this.props.id);
    }
  };

  render() {
    const { image_url, name, price } = this.props.subItem;
    const { selectValue } = this.props;
    const { optionSelectOnChange } = this;

    return (
      <div className="productSubItem">
        <img className="itemImage" src={image_url} alt="product" />
        <div>
          <div className="information">
            <p className="informationTitle">{name}</p>
            <p className="informationPrice">{price.toLocaleString()}원</p>
          </div>
          <div className="option">
            <p className="optionName">상품선택</p>
            <select
              className="optionSelect"
              name="optionSelect"
              onChange={optionSelectOnChange}
              value={selectValue}
            >
              <option value="default">- [필수] 상품 선택 -</option>
              <option value="choose">{name}</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
