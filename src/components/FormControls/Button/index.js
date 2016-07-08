/**
 * @type Base Component
 * @desc Button
 * @author Jafeney
 * @dateTime 2016-07-03
 **/

import React, { Component } from 'react';
import Icon from '../../Basic/Icon/'
import './style.less';

class Button extends Component {

    constructor(props) {
        super(props);

        this.type = ['primary', 'default', 'secondary', 'ghost'].find((item) => item === props.type) || 'default';
        this.size = ['large', 'small'].find((item) => item === props.size) || null;
        this.text = props.text;
        this.icon = props.icon;
        this.shape = ['circle'].find((item) => item === props.shape) || null;
        this.wrapStyle = props.wrapStyle;
        this.wrapClass = props.wrapClass;
        this.width = props.width || null;
        this.style = props.style || null;
        this.className = props.className || null;
        this.disabled = !!props.disabled || false;
        this.callback = props.callback || null;
    }

    _renderText() {
        if (this.text && this.icon) {
            return (<span>{' ' + this.text}</span>)
        }
        if (this.text && !this.icon) {
            return (<span>{this.text}</span>);
        }
    }

    render() {
        let _className = ['ry-btn'];
        _className.push('ry-btn-' + this.type);
        if (this.size) { _className.push('ry-btn-' + this.size) }
        if (this.shape) { _className.push('ry-btn-' + this.shape) }
        if (this.disabled) { _className.push('disabled') }
        return (
            <span style={ this.wrapStyle } className={ this.wrapClass }>
                <button
                    onClick={()=>{ this.callback && this.callback() }} type="button"
                    disabled={ this.disabled }
                    style={{ width:this.width, ...this.style }}
                    className={ _className.join(' ') + ' ' + (this.className ? this.className : '') }>
                        { this.icon ? <Icon type={this.icon} />: null }
                        { this._renderText() }
                </button>
            </span>
        );
    }
}

export default Button
