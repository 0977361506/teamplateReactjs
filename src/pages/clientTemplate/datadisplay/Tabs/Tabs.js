import React from 'react'
import BasicComponent from './component/BasicComponent'

const Tabs = () => {
  return (
    <>
      <>
        <h1>Tabs</h1>
        <div className="mt-5">
          Link xem thêm:
          <a target="_blank" rel="noreferrer" href="https://ant.design/components/tabs/">
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
          {/* <h3>III, Responsive.</h3>
      <p>Responsive configuration enables perfect presentation on small screen devices.</p>
      <br />
      <ResponsiveComponent /> */}
          <br />
          {/* <h3>IV, Reply Editor .</h3>
      <p>
        Comment can be used as an editor, so the user can customize the contents of the component.
      </p>
      <br />
      <ReplyEditorComponent />
      <br /> */}
        </div>
      </>
    </>
  )
}

export default Tabs
