import React, { Component } from 'react';
import Cache from './Cache';
import PGPolicy from './PGPolicy';
import './VirtualAccount.scss';

export default class VirtualAccount extends Component {
  render() {
    return (
      <div className="virtual">
        <PGPolicy />
        <Cache />
      </div>
    );
  }
}
