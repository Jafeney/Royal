/**
 * @desc Royal组件演示 Pagination分页
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import Pagination from '../../components/Navigation/Pagination/'

class DemoPagination extends Component {

    constructor(props) {
        super(props)
    }

    onChangePage(page) {
        console.log(page)
    }

    render() {
        let total = 100,pageSize = 10
        return (
            <div className='wrapper'>
                <h2 className='fixed'>Pagination 分页组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col><Pagination wrapStyle={{float: 'left'}} totalPage={ Math.ceil(total/pageSize) } selectPage={ (page)=>this.onChangePage(page) } pageSpace={3}/></Col>
                        </Row>
                        <Row>
                            <Col><Pagination isSimple={true} wrapStyle={{float: 'left'}} totalPage={ Math.ceil(total/pageSize) } selectPage={ (page)=>this.onChangePage(page) } pageSpace={3}/></Col>
                        </Row>
                    </div>
                    <hr />
                    <h3>API</h3>
                    <div>
                        <ul className='api-list'>
                            <li>
                                <strong>wrapStyle</strong>
                                <span>组件外部内敛样式</span>
                            </li>
                            <li>
                                <strong>wrapClass</strong>
                                <span>组件外部内敛样式类</span>
                            </li>
                            <li>
                                <strong>totalPage</strong>
                                <span>总页数 ，常用的算法："Math.ceil(total/pageSize)"</span>
                            </li>
                            <li>
                                <strong>pageSpace</strong>
                                <span>页面省略显示的间隔</span>
                            </li>
                            <li>
                                <strong>isSimple</strong>
                                <span>简易模式</span>
                            </li>
                            <li>
                                <strong>selectPage</strong>
                                <span>切换页码触发的事件, page为回调函数的参数</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoPagination
