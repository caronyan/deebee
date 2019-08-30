import Taro, { Component } from '@tarojs/taro'
import { AtNavBar } from 'taro-ui'
import './NavBar.scss'

export default class NavBar extends Component {
    static defaultProps = {
        pageName: '',
    }

    handleListIconClick = () => {

    }

    render () {
        const { pageName } = this.props
        return (
            <AtNavBar
                color='#000'
                title={pageName}
                leftIconType='bullet-list'
                onClickLeftIcon={this.handleListIconClick}
            />
        )
    }
}