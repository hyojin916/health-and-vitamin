import React, { Component } from 'react';
import './JustInfo.scss';

export default class JustInfo extends Component {
  render() {
    return (
      <section className="justInfoSection">
        <div className="heightLine"></div>
        <p className="desc">라이프 큐레이션 코스메틱</p>
        <h1 className="brand">DUFT&DOFT</h1>
        <dl className="subDesc">
          <dd>아침부터 저녁까지 쉴 틈 없이 돌아가는</dd>
          <dd>현대 도시인의 삶.</dd>
          <dd>문장에도 쉼표가 필요하듯</dd>
          <dd>우리의 삶에도 쉼이 필요해요.</dd>
          <dd>좋아하는 향의 제품으로 케어해보세요.</dd>
          <dd> 지친 하루 끝, 향기로운 위로로 다가갈게요.</dd>
        </dl>
        <p className="viewMore">VIEW MORE</p>
        <img
          className="productImage"
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cc6c9b8a-1107-44a0-912d-fea07d86213f/shutterstock_1888491445.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210422T124419Z&X-Amz-Expires=86400&X-Amz-Signature=3eb43781a613c6b1322cfdb812cbe2fcf5df2cc0f68f061321c5f4882a6718da&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22shutterstock_1888491445.jpg%22"
          alt="product"
        />
      </section>
    );
  }
}
