/**
 * @desc Royal组件演示 Table表格
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import Table from '../../components/Views/Table/'
import Checkbox from '../../components/FormControls/Checkbox/'
import Button from '../../components/FormControls/Button/'

class DemoTable extends Component {

    constructor(props) {
        super(props)
    }

    _renderRow(row) {
        let onEdit = (x)=> {
            console.log(x+x)
        }, onDelete = (x)=> {
            console.log(x*x)
        }
        return (
            <tr>
                <td><Checkbox ref={"item_" + row.key} />{row.key}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.birthday}</td>
                <td>{row.job}</td>
                <td>{row.address}</td>
                <td>
                    <Button type="primary" callback={()=>onEdit(row.key)} text="编辑" />
                    <Button type="secondary" callback={()=>onDelete(row.key)} text="删除" />
                </td>
            </tr>
        )
    }

    render() {
        let dataSource = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            birthday: '2016-12-29',
            job: '前端工程师',
            address: '西湖区湖底公园1号'
            }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            birthday: '2016-12-29',
            job: '前端工程师',
            address: '西湖区湖底公园1号'
        }],columns = [{
            title: '编号',
            dataIndex: 'key',
            key: 'key',
            },{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            }, {
            title: '生日',
            dataIndex: 'birthday',
            key: 'birthday',
            }, {
            title: '职务',
            dataIndex: 'job',
            key: 'job',
            },{
            title: '住址',
            dataIndex: 'address',
            key: 'address',
            }, {
            title: '操作',
            dataIndex: 'operate',
            key: 'operate',
        }];

        return (
            <div className='wrapper'>
                <h2 className='fixed'>Table 表格组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col>
                                <Table dataSource={dataSource} columns={columns} renderRow={this._renderRow}/>
                            </Col>
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
                                <span>组件外部样式类</span>
                            </li>
                            <li>
                                <strong>style</strong>
                                <span>组件内敛样式</span>
                            </li>
                            <li>
                                <strong>className</strong>
                                <span>组件样式类</span>
                            </li>
                            <li>
                                <strong>columns</strong>
                                <span>表格的表头项，对象数组格式</span>
                            </li>
                            <li>
                                <strong>dataSource</strong>
                                <span>表格的数据，对象数组格式</span>
                            </li>
                            <li>
                                <strong>renderRow</strong>
                                <span>表格单行的渲染模板</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoTable
