import { Button, Empty } from 'antd'
import React from 'react'

const CustomConponent = () => {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={
        <span>
          Customize <a href="#API">Description</a>
        </span>
      }
    >
      <Button type="primary">Create Now</Button>
    </Empty>
  )
}

export default CustomConponent
