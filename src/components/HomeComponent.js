// 这是主页的组件
import React from 'react';

import { View, Text, Button, Image } from 'react-native';

// 
import ImagePicker from 'react-native-image-picker';
var photoOptions = {
  //底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75,
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: ''
    }
  }

  render() {
    return <View>
      <Button title="拍照" onPress={this.cameraAction}></Button>
      <Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200, borderRadius: 100 }}></Image>
    </View>
  }

  cameraAction = () => {
    // showImagePicker就是弹出选择选项的方法， 参数两个：1. 选项配置  2.回调函数
    ImagePicker.showImagePicker(photoOptions, (response) => {
      console.log('response' + response);
      this.setState({
        imgURL: response.uri
      });
      if (response.didCancel) {
        returnreturn
      }
    })
  }
}