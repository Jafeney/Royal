/**
 * @desc Royal组件演示 Checkbox复选框
 * @author Jafeney
 * @dateTime 2016-07-01
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import Checkbox from '../../components/FormControls/Checkbox/'

class DemoCheckbox extends Component {

    constructor(props) {
        super(props)
    }

    confirm () {
        this.refs['apple'].setState({'checked': true})
        alert('显示为选中状态时触发')
    }

    cancel () {
        console.log(this)
        alert('显示为取消状态时触发')
    }

    render() {
        return (
            <div className="wrapper">
                <h2 className="fixed">Checkbox 复选框组件</h2>
                <div className="content">
                    <h3>简单演示</h3>
                    <div>
                        <Row minWidth="md">
                            <Col>
                                <Checkbox checked={false} text="按钮-默认未选中" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Checkbox checked={true} text="按钮-默认选中" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Checkbox checked={true} disabled={true} text="不可用按钮" />
                            </Col>
                        </Row>
                    </div>
                    <h3>触发事件</h3>
                    <div>
                        <Row minWidth="md">
                            <Col>
                                <Checkbox onConfirm={this.confirm.bind(this)} text="按钮－触发onConfirm事件"  />
                            </Col>
                            <Col>
                                <Checkbox onCancel={this.cancel.bind(this)} text="按钮－触发onCancel事件" />
                            </Col>
                        </Row>
                    </div>
                    <h3>按钮组</h3>
                    <div>
                        <Row minWidth="md">
                            <Col>
                                <Checkbox ref="apple" wrapClass={'Checkbox-demo'} text="苹果🍎"  />
                                <Checkbox ref="pear" wrapClass={'Checkbox-demo'} text="梨头🍐"  />
                                <Checkbox ref="orange" wrapClass={'Checkbox-demo'} text="橘子🍊"  />
                            </Col>
                        </Row>
                    </div>
                    <hr />

                    <h3>API</h3>
                    <div>
                        <ul className="api-list">
                            <li>
                                <strong>text</strong>
                                <span>Checkbox对应的文本</span>
                            </li>
                            <li>
                                <strong>checked</strong>
                                <span>设为true则Checkbox为选中状态</span>
                            </li>
                            <li>
                                <strong>disabled</strong>
                                <span>设为true则Checkbox为不可用状态</span>
                            </li>
                            <li>
                                <strong>onConfirm</strong>
                                <span>Checkbox选中触发的事件</span>
                            </li>
                            <li>
                                <strong>onCancel</strong>
                                <span>Checkbox取消选中触发的事件</span>
                            </li>
                            <li>
                                <strong>style</strong>
                                <span>组件内敛样式</span>
                            </li>
                            <li>
                                <strong>className</strong>
                                <span>组件类样式</span>
                            </li>
                            <li>
                                <strong>wrapStyle</strong>
                                <span>组件外部容器内敛样式</span>
                            </li>
                            <li>
                                <strong>wrapClass</strong>
                                <span>组件外部容器样式类</span>
                            </li>
                            <li>
                                <strong>textStyle</strong>
                                <span>Checkbox对应文本的内敛样式</span>
                            </li>
                            <li>
                                <strong>textClass</strong>
                                <span>Checkbox对应文本的样式类</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DemoCheckbox
