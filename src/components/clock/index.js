import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Clock extends Component {

  // 构造函数
  constructor (props) {
    super(props)
    this.state = {
      date : new Date()
    }
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    });
  }

  render () {

    const show = this.props.show // 控制是否显示
    let view = null
    if (show) {
      view =<Text>现在的时间是 {this.state.date.toLocaleTimeString()}.</Text>
    } else {
      view = <Text>nothing.</Text>
    }
    return (
      <View>
        {view}
      </View>
    )
  }
}
