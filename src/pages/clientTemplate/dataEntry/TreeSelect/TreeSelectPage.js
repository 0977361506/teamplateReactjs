import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import TreeSelectPageComponent from './TreeSelectPageComponent'
import TreeSelectPageLoadComponent from './TreeSelectPageLoadComponent'

const Wrapper = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  min-height: 200px;
  padding: 60px;
`
const TransferPage = () => {
  return (
    <div className="container-transfer">
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row mt-3" span={12}>
          <Wrapper>
            <h3>I, TreeSelect Basic</h3>
            <br />
            <TreeSelectPageComponent className="w-100" />
          </Wrapper>
        </Col>
        <Col className="gutter-row mt-3" span={12}>
          <Wrapper>
            <h3>II, TreeSelect load data</h3>
            <br />
            <TreeSelectPageLoadComponent className="w-100" />
          </Wrapper>
        </Col>
      </Row>
    </div>
  )
}
export default TransferPage
