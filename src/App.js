import React, {Component} from "react";

class App extends Component {
  id = 1;
  state = {
    username: '',
    password: '',
    email: '',
    list: []
  };

  handleChange = e => {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  };

  handleInsert = () => {
    const {username, password, email, list} = this.state;
    this.setState({
      username: '',
      password: '',
      email:"",
      list: list.concat({id: this.id, username, password,email})
    });
    this.id = this.id++;
  };



  isPasswordSafe = (password,username) => {
    const patten = /^(?=\w{6,}$)(?=.*[a-z])(?=.*[A-Z])/;
    if (!patten.test(password)) {
      return {
        safe: false,
        msg: "대문자 없음"
      };
    }
    if(password.search(username) > -1) {
      return {
        safe: false,
        msg: "유저명이 포함되어있음!"
      };
    }
    return {safe: true,msg: ""};
  };

  isEmailSafe = (email) => {
    if(!email.includes("@"))
      return {
        safe: false,
        msg: "@ 없음"
      };
    return {safe: true,msg: ""};
  };

  isSafe = () => {
    const { username,password,email } = this.state;
    const pwdSafe1 = this.isPasswordSafe(password,username).safe;
    const pwdSafe2 = this.isPasswordSafe(password,username).msg;
    const emailSafe1 = this.isEmailSafe(email).safe;
    const emailSafe2 = this.isEmailSafe(email).msg;
    return {
      safe:pwdSafe1&&emailSafe1,
      msg:pwdSafe2+''+emailSafe2}
  };

  render() {
    const {username, password,email, list} = this.state;
    const {safe, msg} = this.isSafe();
    return (
        <div>
          <div>
            <input
                name="username"
                placeholder="이름"
                value={username}
                onChange={this.handleChange}
            />
          </div>

          <div>
            <input
                name="password"
                placeholder="비밀번호"
                value={password}
                onChange={this.handleChange}
            />
          </div>

          <div>
            <input
                name="email"
                placeholder="이메일"
                value={email}
                onChange={this.handleChange}
            />
          </div>

          <button
              onClick={this.handleInsert}
              disabled={!safe}
          > {safe ? "submit" : msg}
          </button>
          <ul>
            {list.map((item) => (
                <li key={item.id}>
                  <div>{item.username}</div>
                  <div>{item.password}</div>
                  <div> {item.email}</div>
                </li>
            ))}
          </ul>

        </div>
    )
  }
}

export default App;
