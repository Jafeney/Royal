/**
 * @desc Royal组件演示 QueueAnimation进出场动画
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import { Row, Col } from '../../components/Basic/Layout/'
import QueueAnimation from '../../components/Other/QueueAnimation/'
import { Select, Option } from '../../components/FormControls/Select/'
import Button from '../../components/FormControls/Button/'

class DemoQueueAnimation extends Component {

    constructor(props) {
        super(props)
        this.animateArr = [
            ['bounce','flash','popIn','pulse','rubberBand','shake','tada','swing','wobble','wiggle','jello'],
		    ['bounceIn','bounceInUp','bounceInDown','bounceInLeft','bounceInRight'],
		    ['bounceOut','bounceOutUp','bounceOutDown','bounceOutLeft','bounceOutRight'],
		    ['dropUp','dropDown'],
		    ['easeInLeft','easeInRight'],
		    ['easeOutLeft','easeOutRight'],
		    ['flip','flipInX','flipInY','flipOutX','flipOutY'],
		    ['fadeIn','fadeInUp','fadeInDown','fadeInLeft','fadeInRight','fadeInUpBig','fadeInDownBig','fadeInLeftBig','fadeInRightBig'],
		    ['fadeOut','fadeOutUp','fadeOutDown','fadeOutLeft','fadeOutRight','fadeOutUpBig','fadeOutDownBig','fadeOutLeftBig','fadeOutRightBig'],
		    ['lightSpeedIn','lightSpeedOut'],
		    ['rotateIn','rotateInUpLeft','rotateInUpRight','rotateInDownLeft','rotateInDownRight'],
		    ['rotateOut','rotateOutUpLeft','rotateOutUpRight','rotateOutDownLeft','rotateOutDownRight'],
		    ['scaleIn','scaleInBig'],
		    ['scaleOut','scaleOutBig'],
		    ['slideInUp','slideInDown','slideInLeft','slideInRight'],
		    ['slideOutUp','slideOutDown','slideOutLeft','slideOutRight'],
		    ['hingeLeft','hingeRight','rollIn','rollOut'],
		    ['zoomIn','zoomInUp','zoomInDown','zoomInLeft','zoomInRight'],
		    ['zoomOut','zoomOutUp','zoomOutDown','zoomOutLeft','zoomOutRight']
        ];
        this.state = {
            animate: null
        }
    }

    onChange(value) {
        this.setState({animate: value})
        this.refs.animateBox.changeAnimate(value)
    }

    _renderOptions() {
        return this.animateArr.map(item=>item.map(sub=>[<Option value={sub} />]))
    }

    autoSwitch() {
        let arr =[], i=0;
        this.animateArr.forEach(item => item.forEach(sub => arr.push(sub)))
        let timer = setInterval(()=>{
            this.refs.animateBox.changeAnimate(arr[i])
            this.setState({animate: arr[i]})
            i++;
            if(i === 100) clearInterval(timer)
        },1000)
    }

    render() {
        return (
            <div className='wrapper'>
                <h2 className='fixed'>QueueAnimation 进出场动画组件</h2>
                <div className='content'>
                    <h3>组件演示</h3>
                    <div>
                        <Row>
                            <Col>
                                <QueueAnimation ref={'animateBox'} name="scaleIn" speed="fast" >
                                    <img src="http://www.ah.xinhuanet.com/2016-04/14/1118619097_14606009478061n.jpg" />
                                </QueueAnimation>
                            </Col>
                            <Col>
                                <Select onChange={(value)=>this.onChange(value)} ref="animateName" name={"切换动画名称"}>
                                    {this._renderOptions()}
                                </Select>
                                <br/>
                                <Button type="primary" style={{marginTop: 30}} text="自动切换" callback={()=>this.autoSwitch()} />
                                <span style={{position:'relative',top:15,left:10}}>当前动画： {this.state.animate}</span>
                            </Col>
                        </Row>
                    </div>
                    <hr />
                    <h3>API</h3>
                    <div>
                        <ul className='api-list'>
                            <li>
                                <strong>name</strong>
                                <span>动画名称，具体请参见 演示框内的 Select值</span>
                            </li>
                            <li>
                                <strong>speed</strong>
                                <span>动画执行的速度，预设了三档  ['default','fast','zing'] </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoQueueAnimation
