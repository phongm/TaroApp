import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import PropTypes from 'prop-types';


export default class Home extends Component {

  config = {
    navigationBarTitleText: '主页'
  }
  constructor (props) {
    super(props)
    this.state = { }
  }

  back () {
    Taro.redirectTo({
      url: '/pages/index/index'
    })
  }
  render () {
    return <View>
      <Text>这里是主页</Text>
      <Button onClick={this.back}>返回首页</Button>
      </View>
  }
}

Home.propTypes = {
  name: PropTypes.string
};
