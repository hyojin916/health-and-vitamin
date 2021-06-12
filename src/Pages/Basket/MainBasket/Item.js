import React, { Component } from 'react';
import SalePrice from '../../../Components/SalePrice/SalePrice';

class Item extends Component {
  upClick = () => {
    this.props.changeCount(this.props.id, this.props.prCount + 1);
    fetch('http://18.116.64.187:8000/carts', {
      method: 'PATCH',
      headers: {
        Authorization: localStorage
          .getItem('token')
          .slice(1, localStorage.getItem('token').length - 1),
      },
      body: JSON.stringify({
        id: this.props.id,
        count: this.props.prCount + 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  downClick = () => {
    this.props.changeCount(this.props.id, this.props.prCount - 1);
    fetch('http://18.116.64.187:8000/carts', {
      method: 'PATCH',
      headers: {
        Authorization: localStorage
          .getItem('token')
          .slice(1, localStorage.getItem('token').length - 1),
      },
      body: JSON.stringify({
        id: this.props.id,
        count: this.props.prCount - 1,
      }),
    });
  };

  deleteItem = () => {
    this.props.deleteBasketItem(this.props.id);
  };

  render() {
    const { prImg, prTitle, prPrice, prDiscount, prCount } = this.props;

    return (
      <li className="item">
        <input
          className="bk_check"
          onChange={this.allChecked}
          type="checkbox"
          value={this.props.allChecked}
        />
        <img className="bk_img item_img" src={prImg} alt="히히힣" />
        <div className="bk_pdInfo">{prTitle}</div>
        <div>
          <div className={`info bk_price ${prDiscount ? 'item_price' : ''}`}>
            {prPrice.toLocaleString()}원
          </div>
          <div>
            {prDiscount !== 0 && (
              <SalePrice price={prPrice} discount={prDiscount} />
            )}
          </div>
        </div>

        <div className="bk_count item_count">
          <input type="number" value={prCount} />
          <div className="count_box">
            <i onClick={this.upClick} className="fas fa-sort-up"></i>
            <i onClick={this.downClick} className="fas fa-sort-down"></i>
          </div>
        </div>
        <div className="bk_plus">-</div>
        <div className="bk_dilivery_type">기본배송</div>
        <div className="bk_dilivery">2,500원</div>
        <div className="bk_sum">
          {(prDiscount !== 0
            ? (prPrice - prPrice * 0.01 * prDiscount) * prCount
            : prPrice * prCount
          ).toLocaleString()}
          원
        </div>
        <div className="bk_choose">
          <button type="submit">주문하기</button>
          <button type="submit">관심상품등록</button>
          <button onClick={this.deleteItem} type="submit">
            x 삭제
          </button>
        </div>
      </li>
    );
  }
}

export default Item;
