import React, { Component } from 'react';
import './Kakao.scss';

export default class Kakao extends Component {
  render() {
    return (
      <ul className="kakaoDesc">
        <li className="desc">
          - 카카오톡 앱을 설치한 후, 최초 1회 카드정보를 등록하셔야 사용
          가능합니다.
        </li>
        <li className="desc">
          - 인터넷 익스플로러는 8 이상에서만 결제 가능합니다.
        </li>
        <li className="desc">
          - 카카오머니로 결제 시, 현금영수증 발급은 ㈜카카오페이에서
          발급가능합니다.
        </li>
      </ul>
    );
  }
}
