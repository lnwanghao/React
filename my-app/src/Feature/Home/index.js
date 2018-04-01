import React, { Component } from "react";
import { withRouter } from "react-router";
import less from "./index.less";
import { Layout, Menu, Icon, Button, notification } from "antd";
import Table from "./Table";
const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectItem: {
        name: "nav1",
        type: "user"
      },
      data: []
    };
  }
  static defaultProps = {
    navList: [
      {
        name: "nav1",
        type: "user"
      },
      {
        name: "nav2",
        type: "video-camera"
      },
      {
        name: "nav3",
        type: "upload"
      },
      {
        name: "nav4",
        type: "user"
      }
    ]
  };
  getComponent = () => {
    const { selectItem: { name } } = this.state;
    let component = null;
    switch (name) {
      case "nav1":
        component = <Table />;
        break;
      default:
        component = "暂无内容";
    }
    return component;
  };
  render() {
    const { history, navList } = this.props;
    const { selectItem } = this.state;
    return (
      <Layout className={less.home}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["0"]}
            onClick={({ item, key, keyPath }) => {
              this.setState({
                selectItem: navList[key]
              });
            }}
          >
            {navList.map((v, i) => {
              return (
                <Menu.Item key={i}>
                  <Icon type={v.type} />
                  <span className="nav-text">{v.name}</span>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header className={less.header}>
            <label>{selectItem.name}</label>
            <div>
              <Button
                type="primary"
                onClick={() => {
                  localStorage.removeItem("online");
                  notification.success({
                    message: "退出成功",
                    duration: 2
                  });
                  history.push("/");
                }}
              >
                退出
              </Button>
            </div>
          </Header>
          <Content className={less.content}>{this.getComponent()}</Content>
          <Footer style={{ textAlign: "center" }}>Main Content</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(Home);
