/**
 * @desc 组件演示主容器 container
 * @author Jafeney
 * @dateTime 2016-05-17
 **/

import React, { Component } from 'react'
import './style.less'

class Demo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { children } = this.props
        return (
            <div>
                <div className="sidebar">
                    <h1>Royal</h1>
                    <ul className="sidebar-list">
                        <li>
                            <h2>Basic</h2>
                            <ul>
                                <li><a href="#/icon">Icon</a></li>
                                <li><a href="#/layout">Layout</a></li>
                            </ul>
                        </li>
                        <li>
                            <h2>Form</h2>
                            <ul>
                                <li><a href="#/button">Button</a></li>
                                <li><a href="#/checkbox">Checkbox</a></li>
                                <li><a href="#/radio">Radio</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="containers">
                    { children }
                </div>
            </div>
        )
    }
}

export default Demo
