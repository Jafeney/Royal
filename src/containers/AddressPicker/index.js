/**
 * @desc Royal组件演示 AddressPicker地址选择
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import AddressPicker from '../../components/Other/AddressPicker/'

class DemoAddressPicker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            address: null
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 className='fixed'>AddressPicker 地址选择组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col><AddressPicker style={{marginRight: '4%'}} closeClear={true} onChange={(text)=>  console.log('当前选中地址为：' + text) } /></Col>
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
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoAddressPicker
