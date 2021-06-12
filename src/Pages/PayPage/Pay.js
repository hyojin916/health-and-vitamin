import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PayContainer from './PayContainer';
import { totalPrice } from '../../Functions/funcs';
import './Pay.scss';

const typeList = ['delivery', 'order', 'discount', 'way', 'benefit'];

class Pay extends Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      shippingFee: {},
      name: '',
      address: '',
      subAddress: '',
      phone_number: '',
      email: '',
      message: '',
    };
  }

  changeValue = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  componentDidMount() {
    fetch('http://18.116.64.187:8000/orders', {
      headers: {
        Authorization: localStorage
          .getItem('token')
          .slice(1, localStorage.getItem('token').length - 1),
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.PRODUCT_LIST,
          shippingFee: data.SHIPPING_FEE[0],
        });
      });
  }

  makeTotal = () => {
    const { productList, shippingFee } = this.state;
    const isFeeCharged = totalPrice(productList) > shippingFee.shipping_fee;

    return (
      totalPrice(productList) + (isFeeCharged ? shippingFee.shipping_fee : 0)
    );
  };

  payBtnClick = () => {
    const {
      name,
      address,
      phone_number,
      email,
      message,
      productList,
    } = this.state;

    fetch('http://18.116.64.187:8000/orders', {
      method: 'post',
      headers: {
        Authorization: localStorage
          .getItem('token')
          .slice(1, localStorage.getItem('token').length - 1),
      },
      body: JSON.stringify({
        shipping_information: {
          name,
          address,
          phone_number,
          email,
          message,
        },
        total: productList.reduce((acc, cur) => {
          return (
            acc + (cur.price - (cur.price * cur.discount) / 100) * cur.count
          );
        }, 0),
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.MESSAGE === 'FAIL') {
          alert('한도 초과!!!!!!!!!');
        } else {
          this.props.history.push('/success');
        }
      });
  };

  render() {
    const { productList, shippingFee } = this.state;
    console.log(
      productList.reduce((acc, cur) => {
        return acc + (cur.price - (cur.price * cur.discount) / 100) * cur.count;
      }, 0)
    );
    return (
      <div className="pay">
        <div className="header">
          <i className="fas fa-chevron-left" />
          <a href="/">제너럴브랜즈</a>
          <span>
            <i className="fas fa-shopping-bag" />
            <i className="fas fa-user" />
          </span>
        </div>
        <div className="order">주문/결제</div>
        {typeList.map(type => {
          return (
            <PayContainer
              key={type}
              type={type}
              {...this.state}
              changeValue={this.changeValue}
            />
          );
        })}
        <div className="payBox">
          <button className="payBtn" onClick={this.payBtnClick}>
            {productList
              .reduce((acc, cur) => {
                return (
                  acc +
                  (cur.price - (cur.price * cur.discount) / 100) * cur.count
                );
              }, 0)
              .toLocaleString()}
            원 결제하기
          </button>
          <p className="desc">
            - 무이자할부가 적용되지 않은 상품과 무이자할부가 가능한 상품을
            동시에 구매할 경우 전체 주문 상품 금액에 대해 무이자할부가 적용되지
            않습니다. 무이자할부를 원하시는 경우 장바구니에서 무이자할부 상품만
            선택하여 주문하여 주시기 바랍니다.
          </p>
          <p className="desc">
            - 최소 결제 가능 금액은 결제금액에서 배송비를 제외한 금액입니다.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Pay);
