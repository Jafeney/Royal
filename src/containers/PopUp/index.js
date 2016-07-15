/**
 * @desc Royal组件演示 PopUp浮出式提示
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import Button from '../../components/FormControls/Button/'
import PopUp from '../../components/Views/PopUp/'

class DemoPopUp extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 className='fixed'>PopUp 浮出式提示</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col><Button type={'primary'} text={"弹出提示"} callback={()=>this.pop.show()} /></Col>
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
                <PopUp ref={(ref)=>this.pop = ref} />
            </div>
        )
    }
}

export default DemoPopUp
