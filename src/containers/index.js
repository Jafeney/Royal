/**
 * @desc 组件演示主容器 container
 * @author Jafeney
 * @dateTime 2016-05-17
 **/

import React, { Component } from 'react'
import Icon from '../components/Basic/Icon/'
import './style.less'

class Demo extends Component {

    constructor(props) {
        super(props)
    }

    _renderSidebar() {
        let route = location.href.split('#/')[1].split('?')[0];
        let sidebar = [
            {
                name: "Basic",
                list: ["Icon","Layout"]
            },
            {
                name: "FormControls",
                list: [
                    "Button",
                    "Cascader",
                    "Checkbox",
                    "DatePicker",
                    "Form",
                    "Input",
                    "InputNumber",
                    "Radio",
                    "Rate",
                    "Select",
                    "Slider",
                    "Switch",
                    "Transfer",
                    "TreeSelect",
                    "Upload",
                ]
            },
            {
                name: "Navigation",
                list: ["BreadCrumb","Menu","Pagination","Steps","Tabs"]
            },
            {
                name: "Other",
                list: ["Affix","BackTop","LocaleProvider","QueueAnimation","Spin","Markdown"]
            },
            {
                name: "Views",
                list: [
                    "Alert",
                    "Badge",
                    "Calendar",
                    "Card",
                    "Carousel",
                    "Collapse",
                    "Dropdown",
                    "Message",
                    "Modal",
                    "Notification",
                    "PopConfirm",
                    "PopOver",
                    "Progress",
                    "Table",
                    "Tag",
                    "Timeline",
                    "Tooltip",
                    "Tree"
                ]
            },
        ];
        return sidebar.map((item) => {
            return [
                <li>
                    <h2>{item.name}</h2>
                    <ul>
                        {item.list.map((sub) => {
                            return [
                                <li className={route === sub.toLowerCase() ? "active" : ""}>
                                    <a href={"#/"+sub.toLowerCase()}>{sub}</a>
                                </li>
                            ]
                        })}
                    </ul>
                </li>
            ]
        })
    }

    render() {
        let { children } = this.props
        return (
            <div>
                <div className="sidebar">
                    <h1><a href="#/"><Icon type={"circle-blank"} /> Royal</a></h1>
                    <div className="sidebar-container">
                        <ul className="sidebar-list">
                            { this._renderSidebar() }
                        </ul>
                    </div>
                </div>
                <div className="containers">
                    { children }
                </div>
            </div>
        )
    }
}

export default Demo
