/**
 * @desc Royal组件演示 Upload上传
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import Upload from '../../components/FormControls/Upload/'

class DemoUpload extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 className='fixed'>Upload 上传组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col>
                                <Upload uri={'http://royal-react.com:9999/upload'} multiple={true} />
                            </Col>
                        </Row>
                    </div>
                    <hr />
                    <h3>API</h3>
                    <div>
                        <ul className='api-list'>
                            <li>
                                <strong>uri</strong>
                                <span>图片上传的后端处理接口</span>
                            </li>
                            <li>
                                <strong>multiple</strong>
                                <span>是否开启多图上传, 默认为 false（不开启）</span>
                            </li>
                            <li>
                                <strong>size</strong>
                                <span>一次最大上传数量，默认为 20 </span>
                            </li>
                            <li>
                                <strong>success</strong>
                                <span>单张图片上传完成触发的回调</span>
                            </li>
                            <li>
                                <strong>fail</strong>
                                <span>单张图片上传失败触发的回调</span>
                            </li>
                            <li>
                                <strong>complete</strong>
                                <span>上传全部完成触发的回调</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoUpload
