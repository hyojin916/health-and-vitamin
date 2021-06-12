import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductSub from './ProductSub';
import ProductCountBox from './ProductCountBox';
import ProductTotalBox from './ProductTotalBox';
import ProductInfoimage from './ProductInfoimage';
import ProductDescript from './ProductDescript';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      name: '',
      detail: '',
      price: 0,
      stock: 0,
      count: 1,
      shipping_fee: 0,
      discount: 0,
      minimum_free: 0,
      imageList: [],
      subItemList: [],

      currentImageUrl: '',
      subItemAddList: [],
    };
  }

  componentDidMount() {
    this.fetchProductDetailItem();
  }

  fetchProductDetailItem = () => {
    fetch(
      `http://18.116.64.187:8000/products/detail/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(data => {
        const {
          id,
          name,
          detail,
          price,
          stock,
          shipping_fee,
          discount,
          minimum_free,
          detail_images,
          option_items,
        } = data.RESULT[0];
        this.setState({
          id,
          name,
          detail,
          price,
          stock,
          shipping_fee,
          discount,
          minimum_free,
          imageList: detail_images,
          subItemList: option_items.map(item => {
            item.count = 1;
            return item;
          }),
          currentImageUrl: detail_images[0].image_url,
        });
      });
  };

  goToOtherPage = id => {
    console.log(id);
    if (id === 1) {
      this.props.history.push('/pay');
    }
    if (id === 2) {
      const { subItemList, subItemAddList, id, count } = this.state;
      let nnn = subItemList.filter(product =>
        subItemAddList.includes(product.id)
      );

      nnn = nnn.map(el => {
        return { product_id: el.id, count: el.count };
      });
      // console.log([...nnn, { product_id: id, count: count }]);
      fetch('http://18.116.64.187:8000/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage
            .getItem('token')
            .slice(1, localStorage.getItem('token').length - 1),
        },
        body: JSON.stringify({
          products: [...nnn, { product_id: id, count: count }],
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log('detail');
          console.log(data);
        });
      this.props.history.push('/basket');
    }
    if (id === 3) {
      this.props.history.push('/favoriteproduct');
    }
  };

  changeCurrentImage = index => {
    this.setState({
      currentImageUrl: this.state.imageList[index].image_url,
    });
  };

  calcTotalPrice = () => {
    const { price, count, discount, subItemList, subItemAddList } = this.state;
    return (
      price * count -
      price * (discount / 100) * count +
      subItemList
        .filter(subItem => subItemAddList.includes(subItem.id))
        .reduce((acc, subItem) => {
          if (!subItem.count) subItem.count = 1;
          return acc + subItem.price * subItem.count;
        }, 0)
    );
  };

  addSubItemList = id => {
    let { subItemAddList } = this.state;

    if (!subItemAddList.includes(id)) {
      this.setState({
        subItemAddList: [...subItemAddList, id],
      });
    }
  };

  updateItem = (type, count, id) => {
    type === 'main'
      ? this.updateMainCount(count)
      : this.updateSubCount(count, id);
  };

  updateMainCount = count => {
    this.setState({
      count,
    });
  };

  updateSubCount = (count, id) => {
    let { subItemList } = this.state;

    this.setState({
      subItemList: subItemList.map(item => {
        item.count = item.id === id ? count : item.count;
        return item;
      }),
    });
  };

  deleteItem = (type, id) => {
    type === 'main' ? this.deleteMainItem() : this.deleteSubItem(id);
  };

  deleteMainItem = () => {
    alert('main 제품은 삭제할 수 없습니다.');
  };

  deleteSubItem = id => {
    let { subItemList, subItemAddList } = this.state;

    this.setState({
      subItemAddList: subItemAddList.filter(item => item !== id),
      subItemList: subItemList.map(item => {
        item.count = item.id === id ? 1 : item.count;
        return item;
      }),
    });
  };

  render() {
    const {
      id,
      currentImageUrl,
      imageList,
      subItemList,
      subItemAddList,
      name,
      price,
      stock,
      count,
      discount,
      shipping_fee,
    } = this.state;
    const {
      changeCurrentImage,
      addSubItemList,
      updateItem,
      deleteItem,
      calcTotalPrice,
    } = this;
    return (
      <div className="productDetail">
        <aside className="imageBox">
          <img className="productImage" src={currentImageUrl} alt="product" />
          <ol className="productImageBox">
            {imageList.map((image, index) => {
              return (
                <ProductInfoimage
                  key={image.image_id}
                  image={image.image_url}
                  id={image.image_id}
                  index={index}
                  changeCurrentImage={changeCurrentImage}
                />
              );
            })}
          </ol>
          <div className="expandImageBox">
            <i className="fas fa-search" />
            &nbsp;
            <span className="expandImageSpan">확대보기</span>
          </div>
        </aside>
        <article className="infoBox">
          <ProductDescript
            name={name}
            price={price}
            count={count}
            discount={discount}
            shipping_fee={shipping_fee}
          />
          <p className="guideArea">(최소주문수량 1개 이상)</p>
          <ProductSub
            subItemList={subItemList}
            subItemAddList={subItemAddList}
            addSubItemList={addSubItemList}
          />
          <p className="alertCount">
            <span className="alertCountSpan">!</span>
            &nbsp;&nbsp;수량을 선택해주세요.
          </p>
          <ProductCountBox
            id={id}
            type={'main'}
            count={count}
            price={price}
            stock={stock}
            name={name}
            discount={discount}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
          {subItemList
            .filter(product => subItemAddList.includes(product.id))
            .map(product => {
              return (
                <ProductCountBox
                  key={product.id}
                  id={product.id}
                  type={'sub'}
                  name={product.name}
                  count={product.count}
                  price={product.price}
                  stock={product.stock}
                  updateItem={updateItem}
                  deleteItem={deleteItem}
                />
              );
            })}
          <ProductTotalBox totalPrice={calcTotalPrice()} count={count} />
          <div className="productInfoButtonBox">
            {BUTTONS.map(el => {
              return (
                <button
                  key={el.id}
                  className={el.className}
                  onClick={() => this.goToOtherPage(el.id)}
                >
                  {el.name}
                </button>
              );
            })}
          </div>
        </article>
      </div>
    );
  }
}
export default withRouter(ProductDetail);

const BUTTONS = [
  {
    id: 1,
    name: '바로 구매하기',
    className: 'btnBuy btn',
  },
  {
    id: 2,
    name: '장바구니',
    className: 'btnBasket btn',
  },
  {
    id: 3,
    name: '관심상품',
    className: 'btnInterest btn',
  },
];
