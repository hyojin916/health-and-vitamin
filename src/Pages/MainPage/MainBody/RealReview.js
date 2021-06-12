import React, { Component } from 'react';
import './RealReview.scss';

export default class RealReview extends Component {
  constructor() {
    super();

    this.state = {
      reviewList: [],
    };
  }

  componentDidMount() {
    fetch('http://18.116.64.187:8000/products/main-review')
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewList: data.MAIN_PAGE_REVIEW.slice(0, 8),
        });
      });
  }

  makeAnonymousAccount = user_account => {
    return '****' + user_account.slice(4, user_account.length);
  };

  makeRandomNum = (min, max, digit) => {
    return Math.round(Math.random() * (max - min) + min) / digit;
  };

  render() {
    const { reviewList } = this.state;
    return (
      <section className="realReviewSection">
        <header className="header">REAL REVIEW</header>
        <ul className="reviewList">
          {reviewList.map(review => {
            const {
              product_image,
              product_name,
              review_id,
              uploaded_at,
              user_account,
              user_review,
              user_review_image,
            } = review;

            return (
              <article key={review_id} className="review">
                {user_review_image ? (
                  <img
                    src={user_review_image}
                    alt="review"
                    className="reviewImage"
                  />
                ) : (
                  <i className="fas fa-exclamation-circle" />
                )}
                <p className="content">{user_review}</p>
                <div className="userInfo">
                  <span className="userId">
                    {this.makeAnonymousAccount(user_account)}
                  </span>
                  <span className="createdAt">{uploaded_at.slice(0, 10)}</span>
                </div>
                <div className="forWidLine"></div>
                <div className="product">
                  <img
                    src={product_image}
                    alt="product"
                    className="productImage"
                  />
                  <div className="productInfo">
                    <p className="name">{product_name}</p>
                    <div className="reviewInfo">
                      <span className="reviewCount">
                        리뷰
                        <span className="reviewValue">
                          {this.makeRandomNum(200, 150, 1)}
                        </span>
                      </span>
                      <span className="grade">
                        평점
                        <span className="gradeValue">
                          {this.makeRandomNum(50, 40, 10)}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </ul>
      </section>
    );
  }
}
