import React, { Component } from 'react';
import Banner from './MainBody/Banner';
import Best from './MainBody/Best';
import HotKeyword from './MainBody/HotKeyword';
import JustInfo from './MainBody/JustInfo';
import RealReview from './MainBody/RealReview';
import './Main.scss';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Best />
        <JustInfo />
        <HotKeyword />
        <RealReview />
      </div>
    );
  }
}
