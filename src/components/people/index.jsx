import Taro from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import "./style.scss";

export default function People({ people }) {
  return (
    <View
      className="people"
      onClick={() =>
        Taro.navigateTo({ url: `/pages/card/card?id=${people.id}` })
      }
    >
      <Image className="people-avatar" src={people.avatar} lazyLoad />
      <View className="people-info">
        <View className="people-info-name">{people.name}</View>
        <View className="people-info-work">
          <Text>{people.company}</Text>
          <Text className="people-info-work-divider" />
          <Text>{people.job}</Text>
        </View>
      </View>
    </View>
  );
}
