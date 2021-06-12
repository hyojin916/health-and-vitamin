import React, { Component } from 'react';
import './Banner.scss';

export default class Banner extends Component {
  constructor() {
    super();
    this.state = {
      currentBannerIndex: 0,
    };
  }

  changeImage = () => {
    const { currentBannerIndex } = this.state;

    this.setState({
      currentBannerIndex: currentBannerIndex ? 0 : 1,
    });
  };

  render() {
    const { currentBannerIndex } = this.state;

    return (
      <section className="bannerSection" onClick={this.changeImage}>
        <img
          src={bannerList[currentBannerIndex]}
          alt="benner"
          className="bennerImage"
        />
      </section>
    );
  }
}

const bannerList = [
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f4020e19-42f4-4e59-9b44-6fd1084fb4e1/_%281%29.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210422T124204Z&X-Amz-Expires=86400&X-Amz-Signature=1c22f285be25d9490864aa03453b55708f7fb274639b3e8409db5bd1f311553c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22_%281%29.jpg%22',
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1c612a45-871b-4348-8770-5aa108a1ddbf/.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210422T124025Z&X-Amz-Expires=86400&X-Amz-Signature=66388015bc22342508d07d2218abc62a8244d3835c1fc79983996bb7f9b7e5c5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22.jpg%22',
];
