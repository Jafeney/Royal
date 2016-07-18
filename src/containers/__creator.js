/**
 * @desc 快速创建React组件演示的容器
 * @author Jafeney
 * @dateTime 2016-07-10
 **/

let fs = require('fs'),
    source = [
        {
            NAME : 'AddressPicker',
            TYPE : 'Other',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC : '地址选择器'
        },
        {
            NAME : 'Affix',
            TYPE : 'Other',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '固钉'
        },
        {
            NAME : 'BackTop',
            TYPE : 'Other',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '置顶'
        },
        {
            NAME : 'LocaleProvider',
            TYPE : 'Other',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '国际化'
        },
        {
            NAME : 'QueueAnimation',
            TYPE : 'Other',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '进出场动画'
        },
        {
            NAME : 'Spin',
            TYPE : 'Other',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '加载中'
        },
        {
            NAME : 'Markdown',
            TYPE : 'Other',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '编辑器'
        },
        {
            NAME : 'Cascader',
            TYPE : 'FormControls',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '级联选择'
        },
        {
            NAME : 'DatePicker',
            TYPE : 'FormControls',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '日期选择'
        },
        {
            NAME : 'Form',
            TYPE : 'FormControls',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '表单'
        },
        {
            NAME : 'InputNumber',
            TYPE : 'FormControls',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '数字输入框'
        },
        {
            NAME : 'Input',
            TYPE : 'FormControls',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '输入框'
        },
        {
            NAME : 'Rate',
            TYPE : 'FormControls',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '评分'
        },
        {
            NAME : 'Select',
            TYPE : 'FormControls',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '选择器'
        },
        {
            NAME : 'Slider',
            TYPE : 'FormControls',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '滑动输入条'
        },
        {
            NAME : 'Switch',
            TYPE : 'FormControls',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '开关'
        },
        {
            NAME : 'TreeSelect',
            TYPE : 'FormControls',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '树选择'
        },
        {
            NAME : 'TimePicker',
            TYPE : 'FormControls',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '时间选择'
        },
        {
            NAME : 'Transfer',
            TYPE : 'FormControls',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '穿梭框'
        },
        {
            NAME : 'Upload',
            TYPE : 'FormControls',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '上传'
        },
        {
            NAME : 'BreadCrumb',
            TYPE : 'Navigation',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '面包屑'
        },
        {
            NAME : 'Menu',
            TYPE : 'Navigation',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '导航菜单'
        },
        {
            NAME : 'Pagination',
            TYPE : 'Navigation',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '分页'
        },
        {
            NAME : 'Steps',
            TYPE : 'Navigation',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '步骤条'
        },
        {
            NAME : 'Tabs',
            TYPE : 'Navigation',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '标签页'
        },
        {
            NAME : 'Alert',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '提示警告'
        },
        {
            NAME : 'Badge',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '徽标数'
        },
        {
            NAME : 'Calendar',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '日历'
        },
        {
            NAME : 'Card',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '卡片'
        },
        {
            NAME : 'Carousel',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '走马灯'
        },
        {
            NAME : 'Collapse',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '折叠面板'
        },
        {
            NAME : 'Dropdown',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '下拉菜单'
        },
        {
            NAME : 'Message',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '全局提示'
        },
        {
            NAME : 'Modal',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '对话框'
        },
        {
            NAME : 'Notification',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '通知提示框'
        },
        {
            NAME : 'PopConfirm',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '气泡确认框'
        },
        {
            NAME : 'PopOver',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '气泡卡片'
        },
        {
            NAME : 'PopUp',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '浮出式提示'
        },
        {
            NAME : 'Progress',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '进度条'
        },
        {
            NAME : 'Table',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '表格'
        },
        {
            NAME : 'Tag',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '标签'
        },
        {
            NAME : 'Timeline',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '时间轴'
        },
        {
            NAME : 'Tooltip',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '文字提示'
        },
        {
            NAME : 'Tree',
            TYPE : 'Views',
            AUTHOR : 'Jafeney',
            DATETIME : '2016-07-07',
            DESC: '树形控件'
        },
    ];

source.forEach((item) => {
    fs.mkdir('./' + item.NAME, (err) => {
        let _jsFile = './' + item.NAME + '/index.js';
        if (!err) {
            // write index.js
            fs.appendFileSync( _jsFile, '/**' + '\n' )
            fs.appendFileSync( _jsFile, ' * @desc Royal组件演示 ' + item.NAME + item.DESC + '\n' )
            fs.appendFileSync( _jsFile, ' * @author ' + item.AUTHOR + '\n' )
            fs.appendFileSync( _jsFile, ' * @dateTime ' + item.DATETIME + '\n' )
            fs.appendFileSync( _jsFile, ' **/' + '\n' )
            fs.appendFileSync( _jsFile, '\n' )
            fs.appendFileSync( _jsFile, "import React, { Component } from 'react' " + '\n' )
            fs.appendFileSync( _jsFile, "import { Row, Col } from '../../components/Basic/Layout/' " + '\n' )
            fs.appendFileSync( _jsFile, "import " + item.NAME + " from '../../components/" + item.TYPE + "/" + item.NAME + "/'" + '\n' )
            fs.appendFileSync( _jsFile, '\n' )
            fs.appendFileSync( _jsFile, "class Demo" + item.NAME + " extends Component {" + '\n' )
            fs.appendFileSync( _jsFile, '\n' )
            fs.appendFileSync( _jsFile, "    constructor(props) {" + '\n' )
            fs.appendFileSync( _jsFile, "        super(props)" + '\n' )
            fs.appendFileSync( _jsFile, "    }" + '\n' )
            fs.appendFileSync( _jsFile, '\n' )
            fs.appendFileSync( _jsFile, "    render() {" + '\n' )
            fs.appendFileSync( _jsFile, "        return (" + '\n' )
            fs.appendFileSync( _jsFile, "            <div className='wrapper'>" + '\n' )
            fs.appendFileSync( _jsFile, "                <h2 className='fixed'>" + item.NAME + " " + item.DESC + "组件</h2>" + '\n' )
            fs.appendFileSync( _jsFile, "                <div className='content'>" + '\n' )
            fs.appendFileSync( _jsFile, "                    <h3>组件演示</h3>" + '\n' )
            fs.appendFileSync( _jsFile, "                    <div>" + '\n' )
            fs.appendFileSync( _jsFile, "                        <Row>" + '\n' )
            fs.appendFileSync( _jsFile, "                            <Col>演示的内容</Col>" + '\n' )
            fs.appendFileSync( _jsFile, "                        </Row>" + '\n' )
            fs.appendFileSync( _jsFile, "                    </div>" + '\n' )
            fs.appendFileSync( _jsFile, "                    <hr />" + '\n' )
            fs.appendFileSync( _jsFile, "                    <h3>API</h3>" + '\n' )
            fs.appendFileSync( _jsFile, "                    <div>" + '\n' )
            fs.appendFileSync( _jsFile, "                        <ul className='api-list'>" + '\n' )
            fs.appendFileSync( _jsFile, "                            <li>" + '\n' )
            fs.appendFileSync( _jsFile, "                                <strong>style</strong>" + '\n' )
            fs.appendFileSync( _jsFile, "                                <span>组件内敛样式</span>" + '\n' )
            fs.appendFileSync( _jsFile, "                            </li>" + '\n' )
            fs.appendFileSync( _jsFile, "                        </ul>" + '\n' )
            fs.appendFileSync( _jsFile, "                    </div>" + '\n' )
            fs.appendFileSync( _jsFile, "                </div>" + '\n' )
            fs.appendFileSync( _jsFile, "            </div>" + '\n' )
            fs.appendFileSync( _jsFile, "        )" + '\n' )
            fs.appendFileSync( _jsFile, "    }" + '\n' )
            fs.appendFileSync( _jsFile, "}" + '\n' )
            fs.appendFileSync( _jsFile, '\n' )
            fs.appendFileSync( _jsFile, "export default Demo" + item.NAME + '\n' )
        }
    })
})
