import React, { Component } from 'react';

class SubTitle extends Component {
  render() {
    return <li className="sub_title">{this.props.categoryName}</li>;
  }
}

export default SubTitle;
