import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { NavBar, BottomBar, TaskArea } from '@components'
import { AtFab } from 'taro-ui'
import * as taskActions from '@actions/task'
import './index.scss'

@connect(state => state.task, taskActions)
export default class Index extends Component {

  state = {
    
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () {
    this.props.getUserTasks(1)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = () => {

  }

  handleAddClick = () => {

  }

  render () {
    const { tasks } = this.props
    return (
      <View className='index'>
        <NavBar 
          pageName='首页'
        />
        {
          tasks.map(tagGroup => (
            <TaskArea 
              tagName={tagGroup.tag}
              tasks={tagGroup.list}
            />
          )) 
        }
        <View className='float-btn'>
          <AtFab hover-class='fab-hover' onClick={this.handleAddClick.bind(this)}>
            <Text className='at-fab__icon at-icon at-icon-add'></Text>
          </AtFab>
        </View>
        <BottomBar />
      </View>
    )
  }
}
