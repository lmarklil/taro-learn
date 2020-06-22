import Taro, { useState, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Search from "../../components/search";
import People from "../../components/people";

import * as peopleService from "../../service/people";

import "./style.scss";

function Recommend() {
  const [recommendedPeople, setRecommendedPeople] = useState([]);

  useEffect(() => {
    peopleService.getRecommendedPeople().then((res) => {
      setRecommendedPeople(res);
    });
  });

  return (
    <View className="recommend">
      <Search className="recommend-header" />
      {recommendedPeople.map((people) => (
        <People key={people.id} people={people} />
      ))}
    </View>
  );
}

export default Recommend;
