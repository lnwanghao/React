import React, { Component } from "react";
import { Table as AntdTable, Button } from "antd";
import less from "./index.less";
import { connect } from "react-redux";
import { getData } from "../../../fetch";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: text => <a href="#">{text}</a>
  },
  {
    title: "Age",
    dataIndex: "age"
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
      selectedRows: []
    };
  }
  onChange = (selectedRowKeys, selectedRows) => {
    this.setState({
      selectedRowKeys,
      selectedRows
    });
  };
  getCheckboxProps = record => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name
  });
  render() {
    const { dispatch, data } = this.props;
    const { selectedRows } = this.state;
    const rowSelection = {
      onChange: this.onChange,
      getCheckboxProps: this.getCheckboxProps
    };
    return (
      <div className={less.table}>
        <Button
          type="primary"
          onClick={() => {
            dispatch({
              type: "ADD",
              item: {
                key: `${Math.random() * 10}`,
                name: "John Brown",
                age: 32,
                address: "New York No. 1 Lake Park"
              }
            });
          }}
        >
          添加
        </Button>
        <Button
          style={{ marginLeft: "12px" }}
          type="primary"
          onClick={() => {
            selectedRows.map(v => {
              dispatch({
                type: "DELETE",
                item: v
              });
            });
          }}
        >
          删除
        </Button>
        <AntdTable
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    );
  }
  componentDidMount() {
    const { dispatch } = this.props;
    const _this = this;
    (async function() {
      const data = await getData("./test.json");
      dispatch({ type: "ALL", item: data.data });
    })();
  }
}
export default connect(state => ({
  data: state.data
}))(Table);
