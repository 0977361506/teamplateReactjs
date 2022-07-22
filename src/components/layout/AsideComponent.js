import { Layout, Menu } from 'antd'
import SiderJson from 'constants/siderNew.json'
import React from 'react'
import { Link } from 'react-router-dom'
import IconLayout from './Icon/IconLayout'

const { Sider } = Layout

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}
function getTrim(value) {
  return value.replace(' ', '_')
}

function GetMenu(json) {
  const itemsN = []
  let numberKey = 0
  Object.entries(json).forEach(([key, value]) => {
    let dataFor = ''
    numberKey++
    if (
      value.items &&
      Object.keys(value.items).length !== 0 &&
      Object.getPrototypeOf(value.items) === Object.prototype
    ) {
      dataFor = GetMenu(value.items)
    }
    const labelLink = value.routerLink ? (
      <Link to={value.routerLink}>{value.title}</Link>
    ) : (
      `${value.title}`
    )
    const iconL = value.icon ? <IconLayout icon={value.icon} /> : ''
    itemsN.push(getItem(labelLink, `${getTrim(key)}${numberKey}`, iconL, dataFor))
  })
  return itemsN
}

const AsideComponent = ({ collapsed }) => {
  const listMenu = GetMenu(SiderJson)
  return (
    <Sider
      width={collapsed ? 48 : 300}
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      style={{
        overflow: 'auto',
        borderRight: '1px solid #e8e8e8',
        position: 'fixed',
        top: 48,
        bottom: 0,
        left: 0,
      }}
      className={collapsed ? 'app-sider' : ''}
    >
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{
          height: '100%',
          borderRight: 0,
          overflowX: 'hidden',
        }}
        items={listMenu}
      />
    </Sider>
  )
}

export default AsideComponent
