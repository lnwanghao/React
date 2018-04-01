import React, { Component } from "react";
import { withRouter } from "react-router";
import { Input, Button, notification } from "antd";
import less from "./index.less";
class Login extends Component {
  login = e => {
    e.preventDefault();
    const { history } = this.props;
    const username = this.username.input.value;
    const password = this.password.input.value;
    if (username === "wanghao" && password === "123456") {
      localStorage.setItem("online", true);
      history.push("/");
      notification.success({
        message: "登录成功",
        duration: 2
      });
    } else {
      notification.error({
        message: "登录失败",
        description: "输入的用户名或密码错误",
        duration: 2
      });
    }
  };
  render() {
    return (
      <section>
        <div className={less.info}>后台管理系统</div>
        <div className={less.background}>
          <section className={less.login}>
            <div className={less.border}>
              <form>
                <Input
                  ref={username => (this.username = username)}
                  className={less.input}
                  addonBefore={
                    <span
                      style={{
                        display: "block",
                        width: "70px",
                        textAlign: "center"
                      }}
                    >
                      username
                    </span>
                  }
                  placeholder={"wanghao"}
                />
                <Input
                  ref={password => (this.password = password)}
                  type={"password"}
                  addonBefore={
                    <span
                      style={{
                        display: "block",
                        width: "70px",
                        textAlign: "center"
                      }}
                    >
                      password
                    </span>
                  }
                  placeholder={"123456"}
                />
                <div className={less.button} onClick={this.login}>
                  <Button type="primary">Login</Button>
                </div>
                <input
                  className={less.form}
                  type="submit"
                  value=""
                  onClick={this.login}
                />
              </form>
            </div>
          </section>
        </div>
      </section>
    );
  }
}
export default withRouter(Login);
