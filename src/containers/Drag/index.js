/**
 * @desc Royal组件演示 Drag可拖拽容器
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import Drag from '../../components/Other/Drag/'

class DemoDrag extends Component {

    constructor(props) {
        super(props)
    }

    handleDrag(e) {
        alert('结束拖拽')
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 className='fixed'>Drag 可拖拽容器组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col>
                                <Drag
                                    position={[100,100]}
                                    callback={(e)=>this.handleDrag(e)}
                                    wrapHeight={400}
                                    wrapWidth={800}
                                    wrapStyle={{
                                        borderRadius: 6,
                                        border: '1px solid #f0f0f0',
                                    }}
                                    style={{
                                        width: 100,
                                        height: 100,
                                        backgroundColor: '#f0f0f0',
                                        lineHeight: '80px',
                                        textAlign:'center',
                                    }}>
                                    <p>拖拽我试试</p>
                                </Drag>
                            </Col>
                        </Row>
                    </div>
                    <hr />
                    <h3>API</h3>
                    <div>
                        <ul className='api-list'>
                            <li>
                                <strong>wrapStyle</strong>
                                <span>组件外部容器内敛样式</span>
                            </li>
                            <li>
                                <strong>wrapClass</strong>
                                <span>组件外部容器样式类</span>
                            </li>
                            <li>
                                <strong>wrapWidth</strong>
                                <span>组件外部容器宽度，默认100%</span>
                            </li>
                            <li>
                                <strong>wrapHeight</strong>
                                <span>组件外部容器样高度，默认自适应</span>
                            </li>
                            <li>
                                <strong>callback</strong>
                                <span>拖拽结束触发的事件</span>
                            </li>
                            <li>
                                <strong>position</strong>
                                <span>可拖拽对象的初始位置, 传坐标数组，默认[0,0]</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoDrag
