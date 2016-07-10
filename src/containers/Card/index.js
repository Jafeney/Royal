/**
 * @desc Royal组件演示 Card卡片
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react' 
import { Row, Col } from '../../components/Basic/Layout/' 
import Card from '../../components/Views/Card/'

class DemoCard extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 className='fixed'>Card 卡片组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col>演示的内容</Col>
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

export default DemoCard
