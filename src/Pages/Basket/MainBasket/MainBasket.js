import React, { Component } from 'react';
import Item from './Item';
import './MainBasket.scss';

class MainBasket extends Component {
  render() {
    const { orderList, total, discount, delivery } = this.props;
    return (
      <main className="main_basket">
        <div className="products_basket">
          <div className="basket_top">일반상품 ({orderList.length})</div>
          <div className="check">
            <div className="check_info">
              <div className="info_list">
                <input className="bk_check check_list" type="checkbox" />
                <div className="bk_img check_list">이미지</div>
                <div className="bk_pdInfo check_list">상품정보</div>
                <div className="bk_price check_list">판매가</div>
                <div className="bk_count check_list">수량</div>
                <div className="bk_plus check_list">적립금</div>
                <div className="bk_dilivery_type check_list">배송 구분</div>
                <div className="bk_dilivery check_list">배송비</div>
                <div className="bk_sum check_list">합계</div>
                <div className="bk_choose check_list">선택</div>
              </div>

              <ul className="basket_items">
                {orderList.length > 0 &&
                  orderList.map(item => {
                    return (
                      <Item
                        switchCheckBtn={this.switchCheckBtn}
                        deleteBasketItem={this.props.deleteBasketItem}
                        changeCount={this.props.changeCount}
                        key={item.id}
                        id={item.id}
                        prImg={item.image}
                        prTitle={item.name}
                        prPrice={item.price}
                        prDiscount={item.discount}
                        prCount={item.count}
                      />
                    );
                  })}
              </ul>
              {/* [기본배송] 합계 */}
              <div className="calculator">
                <div className="delivery_box">
                  <div className="delivery_type">[기본배송]</div>
                  <div className="delivery_sum">
                    상품구매금액 {total.toLocaleString('en-US')} + 배송비
                    {delivery.toLocaleString('en-US')} - 상품할인금액
                    {discount.toLocaleString('en-US')} = 합계:
                    {(total + delivery - discount).toLocaleString('en-US')} 원
                  </div>
                </div>

                <div className="move_item">
                  <div className="move">
                    선택상품을{'  '}
                    <button>
                      <i className="fas fa-times"></i> 삭제하기
                    </button>
                    <button>해외배송상품 장바구니로 이동</button>
                  </div>
                  <div>
                    <button onClick={this.props.deleteAllOrder}>
                      장바구니비우기
                    </button>
                    <button>견적서출력</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="products_sum">
          <div className="sum_categori">
            <div className="sum_all">총 상품금액</div>
            <div className="sum_dilivery">총 배송비</div>
            <div className="sum_discount">
              총 할인금액 <button>내역보기</button>
            </div>
            <div className="sum_expect">결제예정금액</div>
          </div>
          <div className="result">
            <div className="sum_all">{total.toLocaleString('en-US')}원</div>
            <div className="sum_dilivery">
              {delivery.toLocaleString('en-US')}원
            </div>
            <div className="sum_discount">
              {discount.toLocaleString('en-US')}원
            </div>
            <div className="sum_expect">
              {(total + delivery - discount).toLocaleString('en-US')}원
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default MainBasket;
