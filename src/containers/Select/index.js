/**
 * @desc Royal组件演示 Select选择器
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import { Select, Option } from '../../components/FormControls/Select/'

class DemoSelect extends Component {

    constructor(props) {
        super(props)
    }

    onChange(value) {
        alert('你选择的是' + value);
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 className='fixed'>Select 选择器组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col>
                                <Select name={"选择框的名称"} >
                                    <Option value={"苹果"} />
                                    <Option checked value={"草莓"} />
                                    <Option value={"鸭梨"} />
                                    <Option value={"香蕉"} />
                                </Select>
                            </Col>
                            <Col>
                                <Select disabled name={"disabled状态"}>
                                    <Option disabled value={"苹果"} />
                                    <Option value={"草莓"} />
                                    <Option value={"鸭梨"} />
                                    <Option value={"香蕉"} />
                                </Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Select onChange={(value)=>this.onChange(value)} name={"onChange事件"}>
                                    <Option value={"苹果"} />
                                    <Option value={"草莓"} />
                                    <Option value={"鸭梨"} />
                                    <Option value={"香蕉"} />
                                </Select>
                            </Col>
                        </Row>
                    </div>

                    <hr />
                    <h3>API</h3>
                    <div>
                        <ul className='api-list'>
                            <li>
                                <strong>name</strong>
                                <span>选择框的名称</span>
                            </li>
                            <li>
                                <strong>value</strong>
                                <span>Option的value值</span>
                            </li>
                            <li>
                                <strong>checked</strong>
                                <span>Option选中</span>
                            </li>
                            <li>
                                <strong>className</strong>
                                <span>样式类</span>
                            </li>
                            <li>
                                <strong>style</strong>
                                <span>内联样式</span>
                            </li>
                            <li>
                                <strong>textClass</strong>
                                <span>名称的样式类</span>
                            </li>
                            <li>
                                <strong>textStyle</strong>
                                <span>名称的内联样式</span>
                            </li>
                            <li>
                                <strong>wrapClass</strong>
                                <span>外部样式类</span>
                            </li>
                            <li>
                                <strong>wrapStyle</strong>
                                <span>外部内联样式</span>
                            </li>
                            <li>
                                <strong>disabled</strong>
                                <span>不可用状态</span>
                            </li>
                            <li>
                                <strong>onChange</strong>
                                <span>输入框输入内容改变触发的事件</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoSelect
