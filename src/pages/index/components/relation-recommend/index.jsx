import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text, ScrollView } from "@tarojs/components";
import People from "./people";

import * as peopleService from "../../../../service/people";

import "./index.scss";

export default function RelationRecommend() {
  const [recommendedPeople, setRecommendedPeople] = useState([]);

  useEffect(() => {
    peopleService.getRecommendedPeople().then((res) => {
      setRecommendedPeople(res);
    });
  });

  return (
    <View className="relation_recommend">
      <View className="relation_recommend-header">
        <View className="relation_recommend-header-title">人脉推荐</View>
        <View className="relation_recommend-header-action">
          <Text
            onClick={() =>
              Taro.navigateTo({ url: "/pages/recommend/recommend" })
            }
          >
            更多
          </Text>
          <Text className="at-icon at-icon-chevron-right"></Text>
        </View>
      </View>
      <ScrollView scrollX>
        <View className="relation_recommend-content">
          {recommendedPeople.map((people) => (
            <People key={people.id} people={people} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
