import React, { Component } from 'react';
import './PGPolicy.scss';

export default class PGPolicy extends Component {
  render() {
    return (
      <ul className="phoneDesc">
        <li className="desc">
          - 소액 결제의 경우 PG사 정책에 따라 결제 금액 제한이 있을 수 있습니다.
        </li>
      </ul>
    );
  }
}
