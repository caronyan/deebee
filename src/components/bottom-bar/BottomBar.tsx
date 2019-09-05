import Taro, { Component } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import './BottomBar.scss'

export default class NavBar extends Component {
    constructor () {
        super(...arguments)
        this.state = {
          current: 0,
          routes: [
            '/pages/record/record',
            '/pages/index/index',
            '/pages/index/index',
          ]
        }
      }

      handleClick = value => {
        
        Taro.navigateTo({
          url: this.state.routes[value]
        })

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
                selectedColor='#80BEAF'
                tabList={[
                { iconType: 'calendar', title: '记录' },
                { iconType: 'check', title: '打卡' },
                { iconType: 'user', title: '我的' }
                ]}
                onClick={this.handleClick.bind(this)}
                current={this.state.current}
            />
        )
    }
}