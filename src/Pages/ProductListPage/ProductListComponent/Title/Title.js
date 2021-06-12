import React, { Component } from 'react';
import SubTitle from './SubTitle';
import './Title.scss';

class Title extends Component {
  render() {
    const { categoryData } = this.props;

    return (
      <header className="title">
        <div className="category_title">{categoryData.main_category_name}</div>
        <ul className="category_sub">
          {categoryData.main_category_list.map(cate => {
            return (
              <SubTitle
                key={cate.category_id}
                categoryName={cate.category_name}
              />
            );
          })}
        </ul>
      </header>
    );
  }
}

export default Title;
