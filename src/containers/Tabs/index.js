/**
 * @desc Royal组件演示 Tabs标签页
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import Tabs from '../../components/Navigation/Tabs/'

class DemoTabs extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 className='fixed'>Tabs 标签页组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col>
                                <Tabs>
                                    <Tabs.Pane onClick={()=>console.log('切换到tab1')} title="tab1" icon="circle-blank" selected={false}>
                                        <p>这里是tab1</p>
                                    </Tabs.Pane>
                                    <Tabs.Pane onClick={()=>console.log('切换到tab2')} title="tab2" icon="circle-blank" selected={true}>
                                        <p>这里是tab2</p>
                                    </Tabs.Pane>
                                    <Tabs.Pane onClick={()=>console.log('切换到tab3')} title="tab3" icon="circle-blank" selected={false}>
                                        <p>这里是tab3</p>
                                    </Tabs.Pane>
                                </Tabs>
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
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoTabs
