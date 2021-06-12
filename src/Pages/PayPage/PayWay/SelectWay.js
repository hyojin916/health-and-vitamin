import React, { Component } from 'react';
import RadioButton from '../RadioButton';
import './SelectWay.scss';

export default class SelectWay extends Component {
  render() {
    return (
      <div className="selectPayWay">
        <p className="title">결제 수단 선택</p>
        <div className="flexBox">
          {this.props.radioList.map(radio => {
            return (
              <RadioButton
                key={radio.id}
                id={radio.id}
                desc={radio.desc}
                name={'payway'}
                defaultId={'card'}
                changeCurrentDisplay={this.props.changeCurrentDisplay}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
