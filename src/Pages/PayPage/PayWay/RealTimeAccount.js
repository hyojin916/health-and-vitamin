import React, { Component } from 'react';
import Cache from './Cache';
import './RealTimeAccount.scss';

export default class RealTimeAccount extends Component {
  render() {
    return (
      <div className="rTimeDesc">
        <label htmlFor="rTimelabel" className="rTimelabel">
          예금주명 *
        </label>
        <input
          type="text"
          name="rTimelabel"
          id="rTimelabel"
          className="rTimeInput"
        />
        <div className="rTimeCheckBox">
          <input type="checkbox" className="rTimeCheck" id="rTimeCheck" />
          <label className="rTimeCheckLabel" htmlFor="rTimeCheck">
            에스크로(구매안전)서비스를 적용합니다.
          </label>
        </div>
        <ul className="rTimeDescSub">
          <li className="desc">
            - 카카오톡 앱을 설치한 후, 최초 1회 카드정보를 등록하셔야 사용
            가능합니다.
          </li>
        </ul>
        <Cache />
      </div>
    );
  }
}
