import Taro from "@tarojs/taro";
import { View, Input } from "@tarojs/components";

import "./style.scss";

export default function Search({ className, onSearch }) {
  return (
    <View className={`search ${className}`}>
      <Input className="search-input" placeholder="搜索" />
    </View>
  );
}
