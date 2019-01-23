import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import './css/path/name.css'
// import { Header } from './page/hone/index.js'
// import Header from './page/hone/index.js'
// import logoPng from '../images/home/logo.png'


// import logoPng from '../images/home/logo.png'

export default class list extends Component {

  config = {
    navigationBarTitleText: '列表页'
  }

  // 即将渲染
  componentWillMount () { }
  // 渲染完成
  componentDidMount () { }
  // 即将移除
  componentWillUnmount () { }
  // 挂在完成
  componentDidShow () { }
  // 隐藏完成
  componentDidHide () { }
  // tick () {
  //   this.setState({
  //     date: new Date()
  //   });
  // }

  render () {

    const listArr = [...Array(10).keys()] //数组列表
    const listItem = listArr.map((index) => {
      return <Text className='li' key={index}> this is number { index +1 } \n</Text>
    })

    return (
      <View className='index'>
        {listItem}
      </View>
    )
  }
}

