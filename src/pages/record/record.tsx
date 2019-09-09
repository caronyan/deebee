import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtCalendar, AtList, AtListItem } from "taro-ui"


export default class Record extends Component {

    state = {
      markDate: [{
          value: '2019/09/03'
      }],
      taskRecord: [{
          isCompleted: true,
          taskName: '一点儿不差',
          isMain: false,
          remark: ''
      }, {
        isCompleted: false,
        taskName: '差一点',
        isMain: true,
        remark: '非常重要'
    }],
        doneIcon: {
            size: 20,
            color: '#78A4FA',
            value: 'check',
        },
        undoneIcon: {
            size: 20,
            color: '#FF4949',
            value: 'close',
        }
    }
  
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
      navigationBarTitleText: '记录',
    }
  
    componentWillMount () { }
  
    componentDidMount () {
    //   this.props.getUserTasks(1)
    }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
  
    handleClick = () => {
  
    }
  
    handleAddClick = () => {
  
    }
  
    render () {
        const { markDate, taskRecord, doneIcon, undoneIcon } = this.state
      return (
        <View className='record'>
            <View>
                <AtCalendar marks={markDate} />
            </View>
            <View>
                <AtList>
                    {
                        taskRecord.map(record => (
                            <AtListItem title={record.taskName} note={record.remark} 
                                iconInfo={record.isCompleted?doneIcon:undoneIcon} /> 
                        ))
                    }
                </AtList>
            </View>
        </View>
      )
    }
  }
  