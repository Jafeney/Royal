/**
 * @desc Royal组件演示 Radio
 * @author Jafeney
 * @dateTime 2016-07-01
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import { Radio, RadioGroup } from '../../components/FormControls/Radio/'

class DemoLayout extends Component {

    constructor(props) {
        super(props)
    }

    confirm () {
        alert('显示为选中状态时触发')
    }

    cancel () {
        alert('显示为取消状态时触发')
    }

    render() {
        return (
            <div className="wrapper">
                <h2>Radio组件</h2>
                <hr />
                <div>
                    <h3>简单演示</h3>
                    <div>
                        <Row minWidth="md">
                            <Col>
                                <Radio checked={true} text="按钮" />
                            </Col>
                            <Col>
                                <Radio checked={true} disabled={true} text="不可用按钮" />
                            </Col>
                        </Row>
                    </div>
                    <h3>触发事件</h3>
                    <div>
                        <Row minWidth="md">
                            <Col>
                                <Radio onConfirm={this.confirm} text="onConfirm"  />
                            </Col>
                            <Col>
                                <Radio onCancel={this.cancel} checked={true} text="onCancel" />
                            </Col>
                        </Row>
                    </div>
                    <h3>按钮组</h3>
                    <div>
                        <Row minWidth="md">
                            <Col>
                                <RadioGroup name={"fruit"}>
                                    <Radio checked={true} wrapClass={'Checkbox-demo'} text="苹果🍎"  />
                                    <Radio wrapClass={'Checkbox-demo'} text="梨头🍐"  />
                                    <Radio wrapClass={'Checkbox-demo'} text="橘子🍊"  />
                                </RadioGroup>
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

export default DemoLayout
