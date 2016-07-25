/**
 * @desc Royal组件演示 Slider滑动输入条
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import Slider from '../../components/FormControls/Slider/'

class DemoSlider extends Component {

    constructor(props) {
        super(props)
    }

    handleSlider() {
        alert('slider值已被修改！')
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 className='fixed'>Slider 滑动输入条组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col><Slider callback={()=>this.handleSlider()} /></Col>
                            <Col></Col>
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

export default DemoSlider
