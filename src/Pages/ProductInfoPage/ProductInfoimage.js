import React, { Component } from 'react';
import './ProductInfoimage.scss';

export default class ProductInfoimage extends Component {
  render() {
    const { id, index, image, changeCurrentImage } = this.props;

    return (
      <div className="infoImage">
        <li onMouseOver={() => changeCurrentImage(index)}>
          <img src={image} alt={id} />
        </li>
      </div>
    );
  }
}
