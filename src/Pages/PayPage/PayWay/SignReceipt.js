import React, { Component } from 'react';
import RadioButton from '../RadioButton';
import Entrepreneur from './Entrepreneur';
import Individual from './Individual';
import './SignReceipt.scss';

export default class SignReceipt extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 'individual',
    };
  }

  changeCurrentDisplay = id => {
    this.setState({
      currentId: id,
    });
  };

  render() {
    return (
      <div className="signReceipt">
        <span className="radioGroup">
          <RadioButton
            id="individual"
            desc={'개인'}
            name={'cacheReceipt'}
            defaultId={'individual'}
            changeCurrentDisplay={this.changeCurrentDisplay}
          />
          <RadioButton
            id="entrepreneur"
            desc={'사업자'}
            name={'cacheReceipt'}
            defaultId={'individual'}
            changeCurrentDisplay={this.changeCurrentDisplay}
          />
        </span>
        {this.state.currentId === 'individual' ? (
          <Individual />
        ) : (
          <Entrepreneur />
        )}
      </div>
    );
  }
}
