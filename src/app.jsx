import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";

import "./assets/iconfont/iconfont.css";
import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: [
      "pages/index/index",
      "pages/recommend/recommend",
      "pages/card/card",
      "pages/me/me",
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#ffa94d",
      navigationBarTitleText: "芳名",
      navigationBarTextStyle: "black",
    },
    tabBar: {
      selectedColor: "#ffa94d",
      list: [
        {
          pagePath: "pages/index/index",
          iconPath: "./assets/tab-icon/home.png",
          selectedIconPath: "./assets/tab-icon/home-fill.png",
          text: "首页",
        },
        {
          pagePath: "pages/me/me",
          iconPath: "./assets/tab-icon/me.png",
          selectedIconPath: "./assets/tab-icon/me-fill.png",
          text: "我的",
        },
      ],
    },
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
