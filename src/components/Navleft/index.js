import React from 'react'
import { Menu } from 'antd'
import { NavLink, Router } from 'react-router-dom'
import MenuConfig from '../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu

export default class Navleft extends React.Component {

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={ item.title } key={ item.key }>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return <Router>
        <Menu.Item title={ item.title } key={ item.key }>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      </Router>
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>bikeSharing</h1>
        </div>
        <Menu theme="dark">
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}