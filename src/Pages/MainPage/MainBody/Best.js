import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Best.scss';

class Best extends Component {
  constructor() {
    super();
    this.state = { bestList: [] };
  }

  componentDidMount() {
    // fetch('http://localhost:8000/products/main-best')
    fetch('http://18.116.64.187:8000/products/main-best')
      .then(res => res.json())
      .then(data => {
        this.setState({
          bestList: data.BEST_PRODUCT.slice(0, 8),
        });
      });
  }

  makeTotalPrice = (price, discount) => {
    return (price - (price * discount) / 100).toLocaleString();
  };

  goDetailPage = id => {
    this.props.history.push(`/productInfo/${id}`);
  };

  render() {
    const { bestList } = this.state;

    return (
      <section className="bestSection">
        <header>
          <h1>BEST</h1>
          <p>지금 가장 잘나가는 상품을 만나보세요</p>
        </header>
        <ul className="productList">
          {bestList.map(product => {
            const { product_id, image, name, price, discount } = product;

            return (
              <article
                key={product_id}
                className="product"
                onClick={() => this.goDetailPage(product_id)}
              >
                <img className="productImage" src={image} alt="product" />
                <p className="name">
                  {name} <i className="fas fa-search" />
                </p>
                <p className="price">{price.toLocaleString()}원</p>
                <p className="result">
                  <span className="applyPrice">
                    {this.makeTotalPrice(price, discount)}원
                  </span>
                  <span className="discount">({discount}%)할인</span>
                </p>
              </article>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default withRouter(Best);
