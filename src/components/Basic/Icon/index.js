/**
 * @type Basic Component
 * @desc Icon
 * @author Jafeney
 * @dateTime 2016-07-06
 **/

import React, { Component } from 'react';
import './style.less';

class Button extends Component {

    constructor(props) {
        super(props);
        this.type = props.type || null;
        this.text = props.text || null;
        this.font = props.font || null;
        this.color = props.color || null;
        this.bgColor = props.bgColor || null;
        this.style = props.style || null;
        this.className = props.className || null;
        this.wrapStyle = props.wrapStyle || null;
        this.wrapClass = props.wrapClass || null;
        this.textStyle = props.textStyle || null;
        this.textClass = props.textClass || null;
    }

    render() {
        let _className = ['icon'];
        if (this.type) { _className.push('icon-' + this.type) }

        return (
            <span style={ this.wrapStyle } className={ this.wrapClass } >
                <i
                    style={{ fontSize: this.font, color: this.color, backgroundColor: this.bgColor, ...this.style }}
                    className={ _className.join(' ') + ' ' + (this.className ? this.className : '') }>
                </i>
                { this.text ? <label className={ this.textClass } style={{ cursor:'pointer', fontSize: this.font, color: this.color, ...this.textStyle }}> { this.text } </label> : null }
            </span>
        );
    }
}

export default Button
