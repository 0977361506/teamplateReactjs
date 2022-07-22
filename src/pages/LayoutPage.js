import { Layout } from 'antd'
import React, { useState } from 'react'

import AsideComponent from 'components/layout/AsideComponent'
import HeaderComponent from '../components/layout/HeaderComponent'
import ContentComponent from '../components/layout/Content'

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout style={{ height: '100vh' }} className="app-layout">
      <HeaderComponent collapsed={collapsed} callback={setCollapsed} />
      <Layout className="site-layout">
        <AsideComponent collapsed={collapsed} callback={setCollapsed} />
        <ContentComponent _marginLeft={collapsed ? 48 : 300} callback={setCollapsed} />
      </Layout>
    </Layout>
  )
}

export default LayoutPage
