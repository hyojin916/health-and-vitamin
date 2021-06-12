import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../FavoriteProduct/FavoriteProduct.scss';

class FavoriteProduct extends Component {
  constructor() {
    super();

    this.state = {
      favoritList: [],
      orderItem: [],
      deleteItem: [],
      addCart: [],
    };
  }

  componentDidMount() {
    fetch('/data/Favorite/Favorite.json', {
      headers: {
        Authorization: localStorage
          .getItem('token')
          .slice(1, localStorage.getItem('token').length - 1),
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          favoritList: data,
        });
      });
  }

  addCart = () => {
    this.props.history.push('/basket');
  };

  deleteCart = () => {
    this.props.deleteBasketItem(this.props.id);
  };

  deleteItem = e => {
    let index = e.target.id;

    // 1. 원본 배열 접근
    // 2. filter 함수 사용
    // 3. 조건을 통해 원하는 값 선택

    this.setState({
      favoritList: this.state.favoritList.filter(favorite => {
        console.log(favorite.id);
        if (favorite.id === Number(index)) {
          return false;
        } else {
          return true;
        }
      }),
    });
  };

  render() {
    return (
      <div className="allFavorite">
        <div className="all">
          <header className="olFavoriteBox">
            <ol className="favoriteList">
              <li>
                <Link to="main" className="goToLink">
                  <i className="fas fa-home" />
                </Link>
              </li>
              <li>
                <i className="fas fa-angle-right" />
              </li>
              <li className="goSignUp">마이쇼핑</li>
              <li>
                <i className="fas fa-angle-right" />
              </li>
              <li className="goSignUp">관심상품</li>
            </ol>
          </header>
          <div className="loginKo">
            <h2 className="nameLogin">관심상품</h2>
          </div>
          <div id="table">
            {this.state.favoritList.length > 0 ? (
              <div className="row">
                <ul>
                  <li className="menuBar">
                    {LISTS.map(item => {
                      return <span key={item}>{item}</span>;
                    })}
                  </li>
                </ul>

                {this.state.favoritList.map(favorite => {
                  return (
                    <ul>
                      <li className="menuItem">
                        <span>
                          <input className="checkBox" type="checkbox" />
                        </span>
                        <img src={favorite.imageUrl} alt="favorite" />
                        <span>{favorite.name}</span>
                        <span>{favorite.price}</span>
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <span>{favorite.delivery}</span>
                        <span>배송비</span>
                        <span>합계</span>
                        <span>
                          <div className="select">
                            <button
                              onClick={this.orderItem}
                              type="submit"
                              className="orderItem"
                            >
                              주문하기
                            </button>
                            <button
                              onClick={this.addCart}
                              type="submit"
                              className="addCart"
                            >
                              장바구니담기
                            </button>
                            <button
                              id={favorite.id}
                              onClick={this.deleteItem}
                              type="submit"
                              className="deleteCart"
                            >
                              x 삭제
                            </button>
                          </div>
                        </span>
                      </li>
                    </ul>
                  );
                })}
              </div>
            ) : (
              <p className="message">관심상품이 내역이 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FavoriteProduct;

const LISTS = [
  <input className="checkBox" type="checkbox" />,
  '이미지',
  '상품정보',
  '판매가',
  '적립금',
  '배송구분',
  '배송비',
  '합계',
  '선택',
];
