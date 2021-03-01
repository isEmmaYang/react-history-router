import React, { useCallback, useContext } from "react";
import { RouterContext } from "./Router";

export default function Link({ to, children }) {
  // 获得RouterContext的value值
  const context = useContext(RouterContext);

  // a标签点击事件
  const changeRouteAction = useCallback((ev) => {
    // a标签的点击需要阻止默认行为，防止真的切换页面。
    ev.preventDefault();
    // 调用pushState方法向浏览器历史加入一个状态，但是不会向服务器请求
    window.history.pushState({}, "", to);
    // 修改当前共享路由的path
    context.setPath(to);
  }, []);

  //Link组件的结构是一个a标签
  return (
    <a href={to} onClick={changeRouteAction}>
      {children}
    </a>
  );
}
