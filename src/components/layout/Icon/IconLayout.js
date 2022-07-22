/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react'
import {
  UserOutlined as UserOutlinedAs,
  NotificationOutlined as NotificationOutlinedAs,
  SolutionOutlined as SolutionOutlinedAs
} from '@ant-design/icons'

const Component = {
  UserOutlined: UserOutlinedAs,
  SolutionOutlined: SolutionOutlinedAs,
  NotificationOutlined: NotificationOutlinedAs,
}
const IconLayout = (props) => {
  const { icon } = props
  return React.createElement(Component[icon])
}

export default IconLayout
