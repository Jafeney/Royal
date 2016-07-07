/**
 * @desc Royal组件演示 Button
 * @author Jafeney
 * @dateTime 2016-07-01
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'

class DemoLayout extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="wrapper">
                <h2>Button组件</h2>
                <hr />
                <div>
                    <h3>简单栅格布局</h3>
                    <div>
                        <Row>
                            <Col className="Layout-col">一列</Col>
                        </Row>
                        <Row>
                            <Col className="Layout-col">二列</Col>
                            <Col className="Layout-col">二列</Col>
                        </Row>
                        <Row>
                            <Col className="Layout-col">三列</Col>
                            <Col className="Layout-col">三列</Col>
                            <Col className="Layout-col">三列</Col>
                        </Row>
                    </div>
                    <h3>响应式栅格布局</h3>
                    <div>
                        <Row minWidth="sm">
                            <Col className="Layout-col">一列</Col>
                        </Row>
                        <Row minWidth="md">
                            <Col className="Layout-col">二列</Col>
                            <Col className="Layout-col">二列</Col>
                        </Row>
                        <Row minWidth="lg">
                            <Col className="Layout-col">三列</Col>
                            <Col className="Layout-col">三列</Col>
                            <Col className="Layout-col">三列</Col>
                        </Row>
                    </div>

                    <hr />

                    <h3>API</h3>
                    <div>
                        <ul className="api-list">
                            <li>
                                <strong> `Row` </strong>
                                <span>一行</span>
                            </li>
                            <li>
                                <strong> `Col` </strong>
                                <span>一列</span>
                            </li>
                            <li>
                                <strong>minWidth</strong>
                                <span>响应适配比例，`sm`、`md`、`lg` 分别对应 '480屏'、`720屏`、'960屏'</span>
                            </li>
                            <li>
                                <strong>style</strong>
                                <span>组件内敛样式</span>
                            </li>
                            <li>
                                <strong>className</strong>
                                <span>组件类样式</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DemoLayout
