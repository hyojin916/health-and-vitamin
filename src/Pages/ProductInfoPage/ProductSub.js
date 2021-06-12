import React, { Component } from 'react';
import ProductSubHeader from './ProductSubHeader';
import ProductSubItem from './ProductSubItem';
import './ProductSub.scss';

export default class ProductSub extends Component {
  render() {
    const { subItemList, subItemAddList, addSubItemList } = this.props;

    return (
      <div className="productSub">
        <ProductSubHeader />
        <div className="subItemBox">
          {subItemList.map(el => {
            return (
              <ProductSubItem
                key={el.id}
                subItem={el}
                id={el.id}
                addSubItemList={addSubItemList}
                subItemList={subItemList}
                selectValue={
                  subItemAddList.includes(el.id) ? 'choose' : 'default'
                }
              />
            );
          })}
        </div>
      </div>
    );
  }
}
