import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from "taro-ui"
import './TaskArea.scss'


export default class TaskArea extends Component {
    static defaultProps = {
        tagName: '',
        tasks: [],
    }

    handleListIconClick = () => {
        
    }

    render () {
        const { tagName, tasks } = this.props

        return (
            <View className='task-group'>
                <View className='task-tag'>{tagName}</View>
                <View className='at-row at-row--wrap task-items'>
                    {
                        tasks.map((task, idx) => (
                            <View className='at-col at-col-3'>
                                <View className='task-item'>
                                    <AtButton circle>{task.name}</AtButton>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    }
}