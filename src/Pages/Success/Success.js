import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Success.scss';

class Success extends Component {
  render() {
    return (
      <div className="success">
        <div className="messageBox">
          <p className="desc">결제가 완료되었습니다!</p>
          <p className="hi">
            Have a Vitamin Day<i class="fas fa-heart"></i>
          </p>

          <div>
            <button
              className="btn"
              onClick={() => {
                this.props.history.push('/');
              }}
            >
              Go Main
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Success);
