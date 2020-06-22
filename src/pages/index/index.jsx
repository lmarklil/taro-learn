import Taro from "@tarojs/taro";

import { View, Text, Input } from "@tarojs/components";

import RelationRecommend from "./components/relation-recommend";

import "./index.scss";

function Index() {
  return (
    <View className="home">
      <View className="home-header">
        <Input className="home-header-search" placeholder="搜索" />
      </View>
      <View className="home-navigator">
        <View className="home-navigator-item">
          <Text className="iconfont icon-icon_addresslist_fil home-navigator-item-icon" />
          <Text className="home-navigator-item-title">通讯录</Text>
        </View>
        <View className="home-navigator-item">
          <Text className="iconfont icon-icon_medal_fill home-navigator-item-icon" />
          <Text className="home-navigator-item-title">新圈层</Text>
        </View>
        <View className="home-navigator-item">
          <Text className="iconfont icon-icon_meeting_fill home-navigator-item-icon" />
          <Text className="home-navigator-item-title">兰芳会</Text>
        </View>
      </View>
      <RelationRecommend />
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "芳名",
};

export default Index;
