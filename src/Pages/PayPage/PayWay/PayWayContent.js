import React, { Component } from 'react';
import Kakao from './Kakao';
import PGPolicy from './PGPolicy';
import RealTimeAccount from './RealTimeAccount';
import VirtualAccount from './VirtualAccount';

export default class PayWayContent extends Component {
  render() {
    const { id } = this.props;
    return (
      <>
        {id === 'card' && <PGPolicy />}
        {id === 'rTime' && <RealTimeAccount />}
        {id === 'phone' && <PGPolicy />}
        {id === 'virtualAccount' && <VirtualAccount />}
        {id === 'kakao' && <Kakao />}
      </>
    );
  }
}
