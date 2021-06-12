import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Title from './ProductListComponent/Title/Title';
import Products from './ProductListComponent/Products/Products';
import './ProductList.scss';
import { isTruthyObj } from '../../utils/function';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      ProductList: [],
      categoryData: {},
    };
  }

  componentDidMount() {
    fetch('http://18.116.64.187:8000/products/category')
      .then(res => res.json())
      .then(data => {
        this.setState({
          categoryData: data.category[this.props.match.params.id],
        });
      });
    fetch(`http://18.116.64.187:8000/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ ProductList: data.product });
      });
  }

  render() {
    const { ProductList, categoryData } = this.state;

    return (
      <div className="productList">
        {isTruthyObj(categoryData) && <Title categoryData={categoryData} />}
        <Products prList={ProductList} />
        <footer></footer>
      </div>
    );
  }
}

export default withRouter(ProductList);
