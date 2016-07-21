/**
 * @desc Royal组件演示 Tabs标签页
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import QueueAnimation from '../../components/Other/QueueAnimation/'
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
                                        <QueueAnimation speed={'zing'} name="fadeInLeft" style={{width: '100%'}}>
                                            <p style={{width: 800, textAlign: 'center'}}>
                                                <img src="http://www.ah.xinhuanet.com/2016-04/14/1118619097_14606009478061n.jpg" />
                                            </p>
                                        </QueueAnimation>
                                    </Tabs.Pane>
                                    <Tabs.Pane onClick={()=>console.log('切换到tab2')} title="tab2" icon="circle-blank" selected={true}>
                                        <QueueAnimation speed={'zing'}  name="fadeInLeft" style={{width: '100%'}}>
                                            <p style={{width: 800, textAlign: 'center'}}>
                                                <img src="http://pic.6188.com/upload_6188s/flashAll/s800/20130409/1365470953NgSSbf.jpg" />
                                            </p>
                                        </QueueAnimation>
                                    </Tabs.Pane>
                                    <Tabs.Pane onClick={()=>console.log('切换到tab3')} title="tab3" icon="circle-blank" selected={false}>
                                        <QueueAnimation speed={'zing'}  name="fadeInLeft" style={{width: '100%'}}>
                                            <p style={{width: 800, textAlign: 'center'}}>
                                                <img src="http://pic.6188.com/upload_6188s/flashAll/s800/20130409/1365470958uArpzB.jpg" />
                                            </p>
                                        </QueueAnimation>
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
