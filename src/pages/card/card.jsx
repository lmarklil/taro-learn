import Taro, { useState, useEffect, useRouter } from "@tarojs/taro";
import { View, Image, Text, Button } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";

import * as peopleService from "../../service/people";

import "./style.scss";

function Card(props) {
  const { params } = useRouter();
  const { id } = params;
  const [people, setPeople] = useState({});

  useEffect(() => {
    peopleService.getPeopleDetail(parseInt(id)).then((res) => {
      setPeople(res);
    });
  }, [id]);

  return (
    <View className="card">
      <View className="card-header">
        <Image className="card-header-avatar" src={people.avatar} />
        <View className="card-header-name">{people.name}</View>
      </View>
      <AtList>
        <AtListItem title="公司" extraText={people.company} />
        <AtListItem title="手机号" extraText={people.phone} />
        <AtListItem title="微信号" extraText={people.wechar} />
        <AtListItem title="职位" extraText={people.job} />
        <AtListItem title="地址" extraText={people.address} />
      </AtList>
      <Button
        type="primary"
        style="margin:40px;background:#ffa94d;"
        onClick={() => Taro.showToast({ title: "名片已擦亮" })}
      >
        擦亮名片
      </Button>
    </View>
  );
}

Card.config = {
  navigationBarTitleText: "名片",
};

export default Card;
