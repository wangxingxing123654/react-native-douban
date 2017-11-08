import React, { Component } from 'react';
import {
  // 用来向程序注册首屏页面组件
  AppRegistry,
  // 这个组件是用来创建样式的，通过调用create方法，接收的参数是一个数据对象
  StyleSheet,
  // Text相当于HTML  相当于span标签   因为移动端的设备默认主轴是纵向的   在RN里所有文字必须被这个组件包裹
  Text,
  // View组件相当于HTML中的div标签，其它所有组件都可以被其包裹，自己不能显示内容
  View,
  TextInput,
  Image,
  Button,
  ActivityIndicator,
  ScrollView,
  ListView
} from 'react-native';

export default class czbk extends Component {
  render() {
    return <ScrollView >
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to 前端27期 挖了一个大坑!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <TextInput secureTextEntry={true} autoFocus={true} style={{ width: '100%' }}></TextInput>
        <Button title='按钮' onPress={() => { console.warn('这是一个按钮') }} />
        <ActivityIndicator size='large' />
        <Image
          source={require('./src/images/ccc.jpg')}
        />
        <Image style={{ width: 200, height: 300 }} source={{ uri: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3639180238,1405107048&fm=175&s=6F148D43708F24FC515925AA03005043&w=218&h=146&img.JPEG' }} />
        <Image style={{ width: 200, height: 300 }} source={{ uri: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3639180238,1405107048&fm=175&s=6F148D43708F24FC515925AA03005043&w=218&h=146&img.JPEG' }} />
      </View>
    </ScrollView>

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class listviewdemo extends Component {

  constructor() {
    super();
    // 创建一个数据源，接收一个对象参数，里面固定写法rowHasChanged， 用来提高渲染效率
    // 这是一个空的数据源对象里面没有数据
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      // ds.cloneWithRows这个方法就是用来把数据装载带数据源对象中
      dataSource: ds.cloneWithRows(['row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2'])
    }
  }

  render() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => {
        return <View>
          <Text>{rowData}</Text>
          <Image
            source={require('./src/images/ccc.jpg')}
          />
        </View>
      }}
    />
  }
}

// 这句话的作用，就是   将czbk这个组件注册为czbk这个项目的首屏页面
AppRegistry.registerComponent('czbk', () => listviewdemo);
