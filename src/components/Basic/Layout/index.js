/**
 * @type Base Component
 * @desc Layout
 * @author Jafeney
 * @dateTime 2016-07-06
 **/
import React, { Component } from 'react'
import './style.less'

class Row extends Component {

    constructor(props) {
        super(props)
        this.minWidth = this.props.minWidth || null;
        this.style = this.props.style || null;
        this.className = this.props.className || null;
    }

    render() {
        let _rowClass = this.minWidth ? "ry--row ry-row-" + this.minWidth + ' ' : "ry-row ";
        let _className = this.className ? _rowClass + this.className : _rowClass;
        return (
            <div className={ _className } style={ this.style }>
                { this.props.children }
            </div>
        );
    }
}

class Col extends Component {

    constructor(props) {
        super(props)
        this.style = this.props.style || null;
        this.className = this.props.className || null;
    }

    render() {
        let _className = this.className ? "ry-col "+ this.className : "ry-col";
        return (
            <div className={ _className } style={ this.style }>
                { this.props.children }
            </div>
        );
    }
}

export { Row, Col }
