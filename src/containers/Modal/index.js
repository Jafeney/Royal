/**
 * @desc Royal组件演示 Modal对话框
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import Button from '../../components/FormControls/Button/'
import Modal from '../../components/Views/Modal/'

class DemoModal extends Component {

    constructor(props) {
        super(props)
    }

    onModalConfirm() {
        console.log(11111);
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 className='fixed'>Modal 对话框组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col>
                                <Button text="打开遮罩" type="primary" callback={()=>this.modal.show()} />
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
                <Modal title={"提示"} style={{width: 420, height: 200}}
                    ref={(ref)=> this.modal = ref} hideCancel={true} onConfirm={()=>this.onModalConfirm()}>
                    <p className="tips">{ 'Hello World!' }</p>

                    <p className="footer">
                        <Button text="确定" callback={()=>this.onModalConfirm()} type="primary" style={{marginRight: 10}} />
                        <Button text="取消" callback={()=>this.modal.close()} type="ghost" />
                    </p>
                </Modal>
            </div>
        )
    }
}

export default DemoModal
