import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import Clock from '../../components/clock/index'


export default class Home extends Component {

  config = {
    navigationBarTitleText: '时钟页'
  }
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
  }


  render () {
    return <View>
      <Clock show={this.state.show} />
    </View>

  }
}

Home.propTypes = {
  show: PropTypes.bool
};
