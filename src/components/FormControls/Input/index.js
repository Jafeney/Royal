/**
 * @type FormControls Component
 * @desc 输入框
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import Icon from '../../Basic/Icon/'
import './style.less'

class Input extends Component {

    constructor(props) {
        super(props)

        this.onChange = props.onChange || null;
        this.onBlur = props.onBlur || null;

        this.state = {
            value : props.value || null,
            checkedStatus : props.checkedStatus || null,
            checkedText : props.checkedText || null,
            disabled : props.disabled || false,
            name : props.name || null,
            defaultValue : props.defaultValue || null,
            placeholder : props.placeholder || null,
            className : props.className || null,
            style : props.style || null,
            textClass : props.textClass || null,
            textStyle : props.textStyle || null,
            wrapClass : props.wrapClass || null,
            wrapStyle : props.wrapStyle || null,
        }
    }

    render() {
        return (
            <span className={this.state.wrapClass} style={this.state.wrapStyle}>
                <label
                    style={this.state.textStyle}
                    className={"ry-input-name" + (this.state.textClass ? " " + this.state.textClass : "")}>
                    {this.state.name}
                </label>
                <input
                    disabled={this.state.disabled}
                    value={this.state.value}
                    type="text"
                    className={"ry-input" + (this.state.className ? " " + this.state.className : "")}
                    onChange = {this.onChange && ((text)=>this.onChange(text.target.value))}
                    onBlur = {this.onBlur && ((text)=>this.onBlur(text.target.value))}
                    defaultValue={this.state.defaultValue}
                    placeholder={this.state.placeholder} />
                <span
                    className={"ry-input-checked " + (this.state.checkedStatus? "ry-" + this.state.checkedStatus : '') }>
                    <Icon name="ok" className="ry-input-checked-ok" />
                    <label className="ry-input-checked-fail">{this.state.checkedText}</label>
                </span>
            </span>
        )
    }
}

export default Input
