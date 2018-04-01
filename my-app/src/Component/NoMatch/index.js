import React from "react";
import less from "./index.less";
const NoMatch = () => {
  return (
    <div className={less.msg}>
      <h1>404</h1>
      <p>请求的页面不存在哦</p>
    </div>
  );
};

export default NoMatch;
