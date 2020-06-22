import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";

import "./me.scss";

function Me() {
  const [user, setUser] = useState({});

  return (
    <View className="me">
      <View className="me-header">
        <Image className="me-header-avatar" />
        <View className="me-header-name">User</View>
      </View>
      <AtList>
        <AtListItem title="我的糖果" arrow="right"></AtListItem>
        <AtListItem title="我的图层" arrow="right"></AtListItem>
        <AtListItem title="我的智库" arrow="right"></AtListItem>
        <AtListItem title="我的图层" arrow="right"></AtListItem>
        <AtListItem title="我的机会" arrow="right"></AtListItem>
        <AtListItem title="我的广播" arrow="right"></AtListItem>
        <AtListItem title="联系客服" arrow="right"></AtListItem>
      </AtList>
    </View>
  );
}

Me.config = {
  navigationBarTitleText: "我的",
  backgroundColor: "#f5f5f5",
};

export default Me;
