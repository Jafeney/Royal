/**
 * @desc Royal组件演示 Input输入框
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import Input from '../../components/FormControls/Input/'

class DemoInput extends Component {

    constructor(props) {
        super(props)
    }

    onChange(text) {
        this.refs["change"].setState({checkedStatus:"fail"})
        this.refs["change"].setState({checkedText:text})
    }

    onBlur(text) {
        this.refs['blur'].setState({checkedStatus:"success"})
        this.refs['blur'].setState({disabled:true})
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 className='fixed'>Input 输入框组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col>
                                <Input name="成功" checkedStatus={'success'} defaultValue={"默认值"} />
                            </Col>
                            <Col>
                                <Input name="失败" checkedStatus={'fail'} defaultValue={"默认值"} checkedText={"错误内容"} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input name="名称" value={"value值不可手动改"} />
                            </Col>
                            <Col>
                                <Input name="名称" defaultValue={"defaultValue值可改"} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input name="状态" value={"disabled状态"} disabled />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input
                                    ref="change"
                                    name="事件"
                                    onChange={(text)=>this.onChange(text)}
                                    defaultValue={"onChange事件"} />
                            </Col>
                            <Col>
                                <Input
                                    ref="blur"
                                    name="事件"
                                    onBlur={(text)=>this.onBlur(text)}
                                    defaultValue={"onBlur事件"} />
                            </Col>
                        </Row>
                    </div>
                    <hr />
                    <h3>API</h3>
                    <div>
                        <ul className='api-list'>
                            <li>
                                <strong>name</strong>
                                <span>输入框的名称</span>
                            </li>
                            <li>
                                <strong>defaultValue</strong>
                                <span>输入框的默认值</span>
                            </li>
                            <li>
                                <strong>value</strong>
                                <span>输入框的值</span>
                            </li>
                            <li>
                                <strong>placeholder</strong>
                                <span>输入框的遮罩字</span>
                            </li>
                            <li>
                                <strong>className</strong>
                                <span>输入框样式类</span>
                            </li>
                            <li>
                                <strong>style</strong>
                                <span>输入框内联样式</span>
                            </li>
                            <li>
                                <strong>textClass</strong>
                                <span>输入框名称的样式类</span>
                            </li>
                            <li>
                                <strong>textStyle</strong>
                                <span>输入框名称的内联样式</span>
                            </li>
                            <li>
                                <strong>wrapClass</strong>
                                <span>输入框外部样式类</span>
                            </li>
                            <li>
                                <strong>wrapStyle</strong>
                                <span>输入框外部内联样式</span>
                            </li>
                            <li>
                                <strong>checkedStatus</strong>
                                <span>输入框输入测试状态，预设 ["success","fail"]</span>
                            </li>
                            <li>
                                <strong>checkedText</strong>
                                <span>输入框输入测试状态错误返回的文字</span>
                            </li>
                            <li>
                                <strong>disabled</strong>
                                <span>输入框不可用状态</span>
                            </li>
                            <li>
                                <strong>onChange</strong>
                                <span>输入框输入内容改变触发的事件</span>
                            </li>
                            <li>
                                <strong>onBlur</strong>
                                <span>输入框焦点事件改变触发的事件</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoInput
