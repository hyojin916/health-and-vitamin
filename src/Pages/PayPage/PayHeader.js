import React, { Component } from 'react';
import './PayHeader.scss';

export default class PayHeader extends Component {
  changeIsDiplay = () => {
    this.props.changeIsDiplay();
  };
  render() {
    return (
      <div className="payHeader" onClick={this.changeIsDiplay}>
        {this.props.type === 'delivery' && <span>배송지</span>}
        {this.props.type === 'order' && <span>주문상품</span>}
        {this.props.type === 'discount' && <span>할인/부가결제</span>}
        {this.props.type === 'info' && <span>결제정보</span>}
        {this.props.type === 'way' && <span>결제수단</span>}
        {this.props.type === 'benefit' && <span>적립 혜택</span>}
        <i className="fas fa-chevron-up" />
      </div>
    );
  }
}
