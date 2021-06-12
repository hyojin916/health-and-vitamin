import React, { Component } from 'react';
import SelectWay from '../PayWay/SelectWay';
import UseNext from '../PayWay/UseNext';
import PayWayContent from '../PayWay/PayWayContent';
import './PayWay.scss';

export default class PayWay extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: 'card',
    };
  }

  changeCurrentDisplay = id => {
    this.setState({
      currentDisplay: id,
    });
  };

  render() {
    return (
      <div className="way">
        <div className="content">
          <SelectWay
            radioList={radioList}
            changeCurrentDisplay={this.changeCurrentDisplay}
          />
          <PayWayContent id={this.state.currentDisplay} />
          <UseNext />
        </div>
      </div>
    );
  }
}

const radioList = [
  {
    id: 'card',
    desc: '카드결제',
  },
  {
    id: 'rTime',
    desc: '에스크로(실시간 계좌이체)',
  },
  {
    id: 'phone',
    desc: '휴대폰 결제',
  },
  {
    id: 'virtualAccount',
    desc: '가상계좌',
  },
  {
    id: 'kakao',
    desc: '카카오페이(간편결제)',
  },
];
