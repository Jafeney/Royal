/**
 * @type Navigation Component
 * @desc 标签页
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import Icon from '../../Basic/Icon/'
import './style.less'

class Tabs extends Component {

    constructor(props) {
        super(props)
        this.panels = this.props.children;
    }

    _renderHeader() {
        return this.panels.map(item => [
            <li className={item.props.selected ? 'active': ''}
                onClick={item.props.onClick && item.props.onClick()}>
                <Icon name={item.props.icon} />
                <span>{item.props.title}</span>
            </li>
        ])
    }

    _renderMainer() {
        return this.panels.map(item => [
            <li className="ry-tab-pane">{item.props.children}</li>
        ])
    }

    render() {
        return (
            <div className="ry-tabs">
                <ul className="header">
                    {this._renderHeader()}
                </ul>
                <ul className="mainer">{this._renderMainer()}</ul>
            </div>
        )
    }
}

class TabPane extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: props.title || null,
            icon: props.icon || null,
            selected: props.selected || false,
            onClick: props.onClick || null,
        }
    }

    render() {
        return (<div className="ry-tab-panes">{this.props.children}</div>)
    }
}

export { Tabs, TabPane }
