import React from 'react'
import BasicComponent from './component/BasicComponent'

const Tooltip = () => {
  return (
    <>
      <h1>Tooltip</h1>
      <div className="mt-5">
        Link xem thêm:
        <a target="_blank" rel="noreferrer" href="https://ant.design/components/tooltip/">
          đây
        </a>
      </div>
      <div>
        <h3>I, Basic</h3>
        <br />
        <BasicComponent />
        <br />
        <br />
        {/* <h3>II, In Card.</h3>
        <p>Display statistic data in Card.</p>
        <br />
        <InCardComponent />
        <br />
        <br /> */}
      </div>
    </>
  )
}

export default Tooltip
