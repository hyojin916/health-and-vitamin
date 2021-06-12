import React, { Component } from 'react';
import './RadioButton.scss';

export default class RadioButton extends Component {
  click = () => {
    this.props.changeCurrentDisplay(this.props.id);
  };

  render() {
    const { id, desc, name, defaultId } = this.props;
    return (
      <span className="RadioButton">
        <input
          className="radio"
          type="radio"
          id={id}
          value={id}
          defaultChecked={id === defaultId}
          name={name}
          onClick={this.click}
        />
        <label className="radioLabel" htmlFor={id}>
          {desc}
        </label>
      </span>
    );
  }
}
