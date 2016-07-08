/**
 * @type FormControls Component
 * @desc 单选框
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import './style.less'

class Radio extends Component {

    constructor(props) {
        super(props)
        this.text = props.text || null;
        this.wrapStyle = props.wrapStyle || null;
        this.wrapClass = props.wrapClass || null;
        this.textStyle = props.textStyle || null;
        this.textClass = props.textClass || null;
        this.style = props.style || null;
        this.className = props.className || null;
        this.onConfirm = props.onConfirm || null;
        this.onCancel = props.onCancel || null;
        this.disabled = props.disabled || false;
        this.checked = props.checked || false;
        this.state = {
            checked: this.checked
        }
    }

    onToggle() {
        this.setState({ checked: !this.state.checked })
        if (this.state.checked) {
            this.onCancel && this.onCancel()
        } else {
            this.onConfirm && this.onConfirm()
        }
    }

    render() {
        let _className = this.className ? "ry-radio" + this.className : "ry-radio";
        _className = this.state.checked ? _className + " ry-checked" : _className;
        return (
            <label className={ "ry-radio-wrapper " + (this.wrapClass ? this.wrapClass : '') + (this.disabled ? " ry-disabled" : '') } style={ this.wrapStyle } >
                <span className={ _className }>
                    <span className={ "ry-radio-inner " + (this.className ? this.className : '') } style={ this.style }></span>
                    <input type="radio" value="on" onClick={()=> !this.disabled && this.onToggle() } disabled={this.disabled} className="ry-radio-input"  />
                </span>
                <span className={ "ry-radio-text " + (this.textClass ? this.textClass : '') } style={ this.textStyle }>{ this.text }</span>
            </label>
        );
    }
}

class RadioGroup extends Component {
    constructor(props) {
        super(props)
        this.name = props.name || null;

        props.children.forEach((item, i) => {
            item.props.onConfirm = ()=>{
                item.props.checked = false
            }
        })
    }

    componentDidMount() {

    }

    render() {
        return (
            <span>
                { this.props.children }
            </span>
        );
    }
}

export { Radio, RadioGroup }
