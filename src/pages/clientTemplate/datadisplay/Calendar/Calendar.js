import React from 'react'
import { Calendar } from 'antd'

const CalendarComponent = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }
  return (
    <>
      <h1>Calendar</h1>
      <div className="mt-5">
        Link xem thêm:
        <a target="_blank" rel="noreferrer" href="https://ant.design/components/calendar/">
          đây
        </a>
      </div>
      <div className="inline-block relative">
        <div className="inline-block relative">
          <Calendar onPanelChange={onPanelChange} />
        </div>
        <div className="site-calendar-demo-card">
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
      </div>
    </>
  )
}

export default CalendarComponent
