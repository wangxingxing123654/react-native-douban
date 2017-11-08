// 这是电影详情的组件
import React from 'react';

import {View, Text, ActivityIndicator, Image} from 'react-native';

export default class DetailComponent extends React.Component{

  constructor(props){
    super();
    this.state = {
      id: props.id,
      isLoading: true,
      movieInfo: []
    }
  }

  render(){
    return <View>
      { this.createDetail() }
      </View>
  }

  createDetail = () =>{
    if(this.state.isLoading){
      return <ActivityIndicator size='large'/>
    }else{
      return <Image style={{width:250, height:300}} source={{uri: this.state.movieInfo.images.large}}/>
    }
  }

  componentDidMount(){
    var url = 'https://api.douban.com/v2/movie/subject/' + this.state.id;
    fetch(url).then((resp)=>{
      resp.json().then((data)=>{
        this.setState({
          isLoading: false,
          movieInfo: data
        })
      })
    })
  }
}