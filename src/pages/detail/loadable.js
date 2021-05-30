import React from "react";
import Loadable from "react-loadable";

//使用loadable异步组件会使原组件的props传值出现问题，export导出原组件时需要使用react-router-dom的withRouter包裹原组件
const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <div>正在加载</div>;
  },
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}
