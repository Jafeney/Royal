/**
 * @desc Royal组件演示 Dropdown下拉菜单
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import Icon from '../../components/Basic/Icon/'
import Dropdown from '../../components/Views/Dropdown/'

class DemoDropdown extends Component {

    constructor(props) {
        super(props)
    }

    _renderItem(item) {
        return (
            <li>
                <Icon name="circle-blank" />
                <label> 您最爱的 {item}</label>
            </li>
        )
    }

    render() {
        let _dataList = ['🍎 苹果', '🍓 草莓', '🍌 香蕉', '🍍 菠萝'];
        return (
            <div className='wrapper'>
                <h2 className='fixed'>Dropdown 下拉菜单组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col>
                                <Dropdown
                                    title={'好吃的水果'}
                                    dropped={false}
                                    renderItem={this._renderItem}
                                    dataList={_dataList} />
                            </Col>
                        </Row>
                    </div>
                    <hr />
                    <h3>API</h3>
                    <div>
                        <ul className='api-list'>
                            <li>
                                <strong>style</strong>
                                <span>组件内敛样式</span>
                            </li>
                            <li>
                                <strong>className</strong>
                                <span>组件样式类</span>
                            </li>
                            <li>
                                <strong>title</strong>
                                <span>标题</span>
                            </li>
                            <li>
                                <strong>dataList</strong>
                                <span>下拉内容列表</span>
                            </li>
                            <li>
                                <strong>renderItem</strong>
                                <span>列表单项渲染模板</span>
                            </li>
                            <li>
                                <strong>dropped</strong>
                                <span>初试下拉状态, true表示下拉， false表示关闭下拉</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoDropdown
