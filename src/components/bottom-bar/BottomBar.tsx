import Taro, { Component } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import './BottomBar.scss'

export default class NavBar extends Component {
    constructor () {
        super(...arguments)
        this.state = {
          current: 0
        }
      }

      handleClick = value => {
        this.setState({
          current: value
        })
      }
      
    static defaultProps = {
        pageName: '',
    }

    handleListIconClick = () => {
        
    }

    render () {
        // const { pageName } = this.props
        return (
            <AtTabBar
                fixed
                tabList={[
                { title: '记录', text: 8 },
                { title: '拍照' },
                { title: '通讯录', dot: true }
                ]}
                onClick={this.handleClick.bind(this)}
                current={this.state.current}
            />
        )
    }
}