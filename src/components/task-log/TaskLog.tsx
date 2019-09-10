import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem, AtSwipeAction } from "taro-ui"
import './TaskLog.scss'


export default class TaskLog extends Component {
    
    static defaultProps = {
        taskRecord: [],
        doneIcon: {
            size: 20,
            color: '#78A4FA',
            value: 'check',
        },
        undoneIcon: {
            size: 20,
            color: '#FF4949',
            value: 'close',
        },
        swipeOptions: [{
            text: '补签',
            style: {
                backgroundColor: '#80BEAF',
            },
        }],
    }

    handleClick = idx => {
        console.log(idx)
    }

    render () {
        const { taskRecord, doneIcon, undoneIcon, swipeOptions } = this.props

        return (
            <View>
                <AtList>
                    {
                        taskRecord.map((record, index) => (
                            <AtSwipeAction
                                key={index}
                                onClick={this.handleClick.bind(this, index)}
                                disabled={record.isCompleted}
                                options={swipeOptions}
                            >
                                <AtListItem title={record.taskName} note={record.remark} 
                                    iconInfo={record.isCompleted?doneIcon:undoneIcon} /> 
                            </AtSwipeAction>
                        ))
                    }
                </AtList>
            </View>
        )
    }
}