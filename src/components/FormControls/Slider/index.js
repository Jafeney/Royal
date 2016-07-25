/**
 * @type FormControls Component
 * @desc 滑动输入条
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import './style.less'

class Slider extends Component {

    constructor(props) {
        super(props)
        this.moveFlag = false;
        this.nowX = 0, this.nowWidth = 0;
        this.state = {
            wrapStyle: props.wrapStyle || null,
            wrapClass: props.wrapClass || null,
            progress: props.progress || 50,
        }
    }

    handleClick(e) {
        this.nowWidth = this.refs.wrapper.clientWidth;
        // console.log(this.nowWidth);
        this.nowX = e.clientX;
        console.log(this.nowX)
        // this.setState({progress: e.clientX})
    }

    handleMouseDown(e) {
        this.moveFlag = true;
        this.nowWidth = this.refs.wrapper.clientWidth;
        this.nowX = e.clientX;
        console.log('开始')
    }

    handleMouseMove(e) {
        let _progress = 1/this.nowWidth * (e.clientX-this.nowX)+this.state.progress;
        if (this.moveFlag && _progress>=0 && _progress<= 100) {
            console.log(_progress);
            this.setState({progress: _progress})
        }
    }

    handleMouseUp(e) {
        this.moveFlag = false;
        console.log('结束')
    }

    render() {
        return (
            <div ref="wrapper"
                style={this.state.wrapStyle}
                onClick={(e)=>this.handleClick(e)}
                onMouseUp={(e)=>this.handleMouseUp(e)}
                onMouseMove={(e)=>this.handleMouseMove(e)}
                onMouseDown={(e)=>this.handleMouseDown(e)}
                className={"ry-slider " +
                    (this.state.wrapClass?this.state.wrapClass:'')}>
                <div className="ry-slider-handle"
                    style={{left: this.state.progress+'%'}}></div>
                <div className="ry-slider-track"
                    style={{width: this.state.progress+'%'}}></div>
                <div className="ry-slider-step"></div>
            </div>
        )
    }
}

export default Slider
