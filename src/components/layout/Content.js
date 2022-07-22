import { Route, Routes } from 'react-router-dom'
import routes from 'routes'
import { Layout } from 'antd'
import React from 'react'

const { Content } = Layout

const ContentComponent = ({ _marginLeft }) => {
  return (
    <>
      <Content
        className="site-layout-background"
        style={{
          marginTop: '48px',
          padding: 24,
          height: 'auto',
          minHeight: 280,
          maxHeight: 'calc(100vh - 48px)',
          marginLeft: _marginLeft,
          overflow: 'auto',
        }}
      >
        <Routes>
          {routes.map((route) => {
            return <Route key={route.path} path={route.path} element={route.main()} />
          })}
        </Routes>
      </Content>
    </>
  )
}

export default ContentComponent
