import React, { Component } from 'react';
import PayBody from './PayBody';
import PayHeader from './PayHeader';
import './PayContainer.scss';

export default class PayContainer extends Component {
  constructor() {
    super();

    this.state = {
      isDiplay: false,
    };
  }

  changeIsDiplay = () => {
    this.setState({
      isDiplay: !this.state.isDiplay,
    });
  };

  render() {
    return (
      <div>
        <PayHeader
          isDiplay={this.state.isDiplay}
          type={this.props.type}
          changeIsDiplay={this.changeIsDiplay}
        />
        {this.state.isDiplay && <PayBody {...this.props} />}
      </div>
    );
  }
}
