// 这是电影的组件
import React from 'react';

import { View, Text, ActivityIndicator, ListView, Image, TouchableOpacity } from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class MovieComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      isLoading: true
    }
  }

  render() {
    return <View>
      {this.createMovieList()}
    </View>
  }

  createMovieList = () => {
    if (this.state.isLoading) {
      return <ActivityIndicator size='large' />;
    } else {
      return <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => {
          return <TouchableOpacity onPress={()=>Actions.detail({id:rowData.id})}>
            <View style={{ flexDirection: 'row', borderBottomColor:'#fff', borderBottomWidth:2, margin:5 }}>
            <Image style={{ width: 100, height: 150 }} source={{ uri: rowData.images.medium }} />
            <View style={{ justifyContent:'space-around' }}>
              <Text>电影名称：{rowData.title}</Text>
              <Text>上映年份：{rowData.year}</Text>
              <Text>电影评分：{rowData.rating.average}</Text>
            </View>
          </View>
          </TouchableOpacity>
        }}
      />
    }
  }

  componentDidMount() {
    var url = 'https://api.douban.com/v2/movie/in_theaters';
    fetch(url).then((response) => {
      response.json().then((data) => {
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(data.subjects)
        })
      })
    })
  }
}