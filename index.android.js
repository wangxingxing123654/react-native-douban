import React, { Component } from 'react';
import {
  // 用来向程序注册首屏页面组件
  AppRegistry,
  Text,
  // View组件相当于HTML中的div标签，其它所有组件都可以被其包裹，自己不能显示内容
  View,
  StyleSheet
} from 'react-native';

import {Router, Scene} from 'react-native-router-flux';

import Index from './src/components/IndexComponent';
import Home from './src/components/HomeComponent';
import Movie from './src/components/MovieComponent';
import About from './src/components/AboutComponent';
import Detail from './src/components/DetailComponent';


export default class czbk extends Component {
  render() {
    return <Router>
    <Scene key="root">
      <Scene hideNavBar={true} key="index" component={Index}/>
      <Scene key="home" component={Home} title="主页"/>
      <Scene key="movie" component={Movie} title="电影"/>
      <Scene key="about" component={About} title="关于"/>
      <Scene key="detail" component={Detail} title="电影详情"/>
    </Scene>
  </Router>;

  }
}

// 这句话的作用，就是   将czbk这个组件注册为czbk这个项目的首屏页面
AppRegistry.registerComponent('czbk', () => czbk);
