import React, { Component } from 'react';
import {
  Text,
  // View组件相当于HTML中的div标签，其它所有组件都可以被其包裹，自己不能显示内容
  View,
  StyleSheet,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default class IndexComponent extends Component {
  render() {
    return <View style={{ height: 200 }}>
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Image style={{ width: '100%', height: '100%' }} source={{ uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=878886462,1722728080&fm=27&gp=0.jpg' }} />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'orange', height: 35, alignItems: 'center' }}>
        <Text onPress={() => Actions.home()}>主页</Text>
        <Text onPress={() => Actions.movie()}>电影</Text>
        <Text onPress={() => Actions.about()}>关于</Text>
      </View>
    </View>

  }
}