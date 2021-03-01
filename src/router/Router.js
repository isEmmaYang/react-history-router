import React, { Component, createContext } from "react";

// 用于共享路由当前history地址
export const RouterContext = createContext();

export default class Router extends Component {
  state = {
    path: "/", //路由当前history地址
  };

  componentDidMount() {
    // 先解析第一次的history值
    const path = window.location.pathname;
    this.setState({ path });

    // 监听浏览器回退事件
    window.addEventListener("popstate", (...rest) => {
      // 获得回退的地址
      const path = window.location.pathname;
      this.setState({ path });
    });
  }

  render() {
    // 使用context共享路由当前history地址
    return (
      <RouterContext.Provider
        value={{
          //共享的history地址
          path: this.state.path,
          //修改history地址的方法
          setPath: (path) => {
            this.setState({ path });
          },
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
