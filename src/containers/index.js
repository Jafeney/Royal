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
                list: [
                    {
                        name: "Icon",
                        complete: true,
                    },
                    {
                        name: "Layout",
                        complete: true,
                    },
                ]
            },
            {
                name: "FormControls",
                list: [
                    {
                        name: "Button",
                        complete: true,
                    },
                    {
                        name: "Cascader",
                        complete: false,
                    },
                    {
                        name: "Checkbox",
                        complete: true,
                    },
                    {
                        name: "DatePicker",
                        complete: false,
                    },
                    {
                        name: "Form",
                        complete: false,
                    },
                    {
                        name: "Input",
                        complete: true,
                    },
                    {
                        name: "InputNumber",
                        complete: false,
                    },
                    {
                        name: "Radio",
                        complete: true,
                    },
                    {
                        name: "Rate",
                        complete: false,
                    },
                    {
                        name: "Select",
                        complete: true,
                    },
                    {
                        name: "Slider",
                        complete: false,
                    },
                    {
                        name: "Switch",
                        complete: false,
                    },
                    {
                        name: "Transfer",
                        complete: false,
                    },
                    {
                        name: "TreeSelect",
                        complete: false,
                    },
                    {
                        name: "Upload",
                        complete: false,
                    },
                ]
            },
            {
                name: "Navigation",
                list: [
                    {
                        name: "BreadCrumb",
                        complete: false,
                    },
                    {
                        name: "Menu",
                        complete: false,
                    },
                    {
                        name: "Pagination",
                        complete: true,
                    },
                    {
                        name: "Steps",
                        complete: false,
                    },
                    {
                        name: "Tabs",
                        complete: true,
                    },
                ]
            },
            {
                name: "Other",
                list: [
                    {
                        name: "AddressPicker",
                        complete: true,
                    },
                    {
                        name: "Affix",
                        complete: false,
                    },
                    {
                        name: "BackTop",
                        complete: false,
                    },
                    {
                        name: "LocaleProvider",
                        complete: false,
                    },
                    {
                        name: "QueueAnimation",
                        complete: true,
                    },
                    {
                        name: "Spin",
                        complete: true,
                    },
                    {
                        name: "Markdown",
                        complete: false,
                    },
                ]
            },
            {
                name: "Views",
                list: [
                    {
                        name: "Alert",
                        complete: false,
                    },
                    {
                        name: "Badge",
                        complete: false,
                    },
                    {
                        name: "Calendar",
                        complete: false,
                    },
                    {
                        name: "Card",
                        complete: false,
                    },
                    {
                        name: "Carousel",
                        complete: false,
                    },
                    {
                        name: "Collapse",
                        complete: false,
                    },
                    {
                        name: "Dropdown",
                        complete: false,
                    },
                    {
                        name: "Message",
                        complete: false,
                    },
                    {
                        name: "Modal",
                        complete: true,
                    },
                    {
                        name: "Notification",
                        complete: false,
                    },
                    {
                        name: "PopConfirm",
                        complete: false,
                    },
                    {
                        name: "PopOver",
                        complete: false,
                    },
                    {
                        name: "PopUp",
                        complete: true,
                    },
                    {
                        name: "Progress",
                        complete: false,
                    },
                    {
                        name: "Table",
                        complete: true,
                    },
                    {
                        name: "Tag",
                        complete: false,
                    },
                    {
                        name: "Timeline",
                        complete: false,
                    },
                    {
                        name: "Tooltip",
                        complete: false,
                    },
                    {
                        name: "Tree",
                        complete: false,
                    },
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
                                <li className={route === sub.name.toLowerCase() ? "active" : ""}>
                                    <a href={"#/"+sub.name.toLowerCase()}>{sub.name} {sub.complete?<Icon className="ry-complete" name="ok" />:''}</a>
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
                    <h1><a href="#/" className="logo"><img src="../../icon.ico" />Royal</a></h1>
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
