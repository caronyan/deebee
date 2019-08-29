import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
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
            <View className='at-row'>
                {
                    tasks.map((task, idx) => (
                        <View className='at-col'>{ task.name }</View>
                    ))
                }
            </View>
        )
    }
}