import React, { Component } from 'react';
import PayDelivery from './PayBody/PayDelivery';
import PayOrder from './PayBody/PayOrder';
import PayDiscount from './PayBody/PayDiscount';
import PayInfo from './PayBody/PayInfo';
import PayWay from './PayBody/PayWay';
import PayBenefit from './PayBody/PayBenefit';
import './PayBody.scss';

export default class PayBody extends Component {
  render() {
    const {
      type,
      productList,
      shippingFee,
      name,
      address,
      subAddress,
      phone_number,
      email,
      message,
      changeValue,
    } = this.props;

    const payTypeTable = {
      delivery: (
        <PayDelivery
          name={name}
          address={address}
          subAddress={subAddress}
          phone_number={phone_number}
          email={email}
          message={message}
          changeValue={changeValue}
        />
      ),
      order: <PayOrder productList={productList} shippingFee={shippingFee} />,
      discount: <PayDiscount />,
      info: <PayInfo />,
      way: <PayWay />,
      benefit: <PayBenefit />,
    };

    return <>{payTypeTable[type]}</>;
  }
}
