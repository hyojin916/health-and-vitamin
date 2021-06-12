import React, { Component } from 'react';
import '../AccountPage/Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      color: '',
      userId: '',
      userPw: '',
      isBtnAble: 'offColor',
    };
  }

  handleChange = e => {
    e.preventDefault();

    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (this.state.userId.includes('@') && this.state.userPw.length > 5) {
          this.setState({
            isBtnAble: 'onColor',
          });
        } else {
          this.setState({
            isBtnAble: 'offColor',
          });
        }
      }
    );
  };

  goToMain = () => {
    fetch('http://18.116.64.187:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.userId,
        password: this.state.userPw,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('token', JSON.stringify(data['ACCESS_TOKEN']));
        this.props.history.push('/');
      });
  };

  goToMembership = () => {
    this.props.history.push('/signup');
  };

  render() {
    return (
      <div className="loginHome">
        <div className="loginIcon">
          <div className="loginKo">
            <h2 className="nameLogin">로그인</h2>
          </div>
          <div className="idPwMom">
            <div className="idPw">
              <div className="idPwBig">
                <div className="idBox">
                  <div className="idKo">아이디</div>
                  <div>
                    <input
                      className="writeId"
                      type="text"
                      name="userId"
                      placeholder="아이디"
                      value={this.state.userId}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="pwBox">
                  <div className="pwKo">비밀번호</div>
                  <div>
                    <input
                      className="writePw"
                      type="password"
                      name="userPw"
                      value={this.state.userPw}
                      onChange={this.handleChange}
                      placeholder="비밀번호"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className={'loginBtBox ' + this.state.isBtnAble}
                  onClick={this.goToMain}
                >
                  {/* <a className="loginBt" href="/"> */}
                  로그인
                  {/* </a> */}
                </button>
              </div>
            </div>
            <div className="searchBox">
              <div className="searchId">
                <a href="/" className="searchIdBox">
                  아이디 찾기
                </a>
              </div>
              <div>|</div>
              <div className="searchPw">
                <a href="/" className="searchPwBox">
                  비밀번호 찾기
                </a>
              </div>
            </div>
            <div className="yet">
              <p className="general">
                아직 제너럴브랜즈의 회원이 아니신가요?
                <br />
                <span className="service">
                  회원가입하고 다양한 혜택과 서비스를 이용해보세요!
                </span>
              </p>
              <button className="memberBt" onClick={this.goToMembership}>
                <h4 style={{ color: this.state.color }}>회원가입</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
