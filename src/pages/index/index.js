import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
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

  toHome () {
    Taro.navigateTo({
        url: '/pages/home/index'
      })
  }
  toList () {
    Taro.navigateTo({
        url: '/pages/list/index'
      })
  }
  toClock () {
    Taro.navigateTo({
        url: '/pages/clock/index'
      })
  }

  render () {
    return (
      <View className='index'>
        <Button onClick={this.toHome}>主页</Button>
        <Button onClick={this.toList}>列表页</Button>
        <Button onClick={this.toClock}>时钟</Button>
      </View>
    )
  }
}

