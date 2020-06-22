import Taro from "@tarojs/taro";

import { View, Text, Image } from "@tarojs/components";

import "./people.scss";

export default function People({ people }) {
  return (
    <View
      className="people"
      onClick={() =>
        Taro.navigateTo({ url: `/pages/card/card?id=${people.id}` })
      }
    >
      <Image className="people-avatar" src={people.avatar} lazyLoad />
      <View className="people-name">{people.name}</View>
      <View className="people-info">{people.company}</View>
      <View className="people-info">{people.job}</View>
    </View>
  );
}
