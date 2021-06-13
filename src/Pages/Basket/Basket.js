import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MainBasket from './MainBasket/MainBasket';
import './Basket.scss';

class Basket extends Component {
  constructor() {
    super();
    this.state = {
      orderList: [],
      total: 0,
      discount: 0,
      delivery: 2500,
    };
  }

  componentDidMount() {
    fetch('http://18.116.64.187:8000/carts', {
      headers: {
        Authorization: localStorage
          .getItem('token')
          .slice(1, localStorage.getItem('token').length - 1),
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ orderList: data.PRODUCT_LIST });
      });
  }

  giveItemList = () => {
    let products = this.state.orderList.map(order => {
      return {
        product_id: order.id,
        count: order.count,
      };
    });

    fetch('http://18.116.64.187:8000/carts', {
      method: 'POST',
      headers: {
        Authorization: localStorage
          .getItem('token')
          .slice(1, localStorage.getItem('token').length - 1),
      },
      body: {
        products,
      },
    })
      .then(res => res.json())
      .then(data => {});
    this.props.history.push('/pay');
  };

  deleteBasketItem = i => {
    let { orderList } = this.state;
    this.setState({
      orderList: orderList.filter(({ id }) => {
        return id !== i;
      }),
    });
    this.deleteFetch(i);
  };

  deleteAllOrder = () => {
    this.setState({
      orderList: [],
    });
  };

  deleteFetch = id => {
    fetch('http://18.116.64.187:8000/carts', {
      method: 'DELETE',
      headers: {
        Authorization: localStorage
          .getItem('token')
          .slice(1, localStorage.getItem('token').length - 1),
      },
      body: JSON.stringify({
        products: [{ id }],
      }),
    });
  };

  changeCount = (itemId, count) => {
    if (!count) return;

    const { orderList } = this.state;

    this.setState({
      orderList: orderList.map(order => {
        if (order.id !== itemId) return order;
        return { ...order, count };
      }),
    });
  };

  goToMain = () => {
    this.props.history.push('/');
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.orderList !== this.state.orderList) {
      let totalAmount = 0;
      let totalDiscount = 0;
      this.state.orderList.forEach(order => {
        totalAmount += order.price * order.count;
        totalDiscount += order.price * (order.discount / 100) * order.count;
        if (totalAmount - totalDiscount > 20000) {
          this.setState({ delivery: 0 });
        } else {
          this.setState({ delivery: 2500 });
        }
      });

      this.setState({ total: totalAmount, discount: totalDiscount });
    }
  }

  render() {
    const { orderList } = this.state;
    return (
      <div className="basket_page_body">
        <div className="basket_page">
          <div className="title">장바구니</div>
          <div className="basket">
            {orderList !== {} && (
              <MainBasket
                total={this.state.total}
                discount={this.state.discount}
                delivery={this.state.delivery}
                orderList={orderList}
                changeCount={this.changeCount}
                deleteBasketItem={this.deleteBasketItem}
                deleteAllOrder={this.deleteAllOrder}
              />
            )}

            <div className="btns">
              <div className="order_btns">
                <button className="order_all_btn" onClick={this.giveItemList}>
                  전체상품주문
                </button>
                <button className="order_select_btn">선택상품주문</button>
              </div>
              <button onClick={this.goToMain} className="keep_shopping">
                쇼핑계속하기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Basket);
