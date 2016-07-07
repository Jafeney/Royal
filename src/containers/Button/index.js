/**
 * @desc Royal组件演示 Button
 * @author Jafeney
 * @dateTime 2016-07-01
 * */

import React, { Component } from 'react'
import Button from '../../components/FormControls/Button/'

class DemoButton extends Component {

    constructor(props) {
        super(props)
    }

    onClick(something) {
        console.log(something);
    }

    render() {
        return (
            <div className="wrapper">
                <h2>Button组件</h2>
                <hr />
                <div>
                    <h3>type</h3>
                    <div>
                        <Button text={'primary'} wrapClass={'Button-demo'} type={'primary'} />
                        <Button text={'secondary'} wrapClass={'Button-demo'} type={'secondary'} />
                        <Button text={'default'} wrapClass={'Button-demo'} type={'default'} />
                        <Button text={'ghost'} wrapClass={'Button-demo'}  icon={''} type={'ghost'} />
                    </div>

                    <h3>size</h3>
                    <div>
                        <Button text={'large'} wrapClass={'Button-demo'} size={'large'} />
                        <Button text={'default'} wrapClass={'Button-demo'} size={'default'} />
                        <Button text={'small'} wrapClass={'Button-demo'} size={'small'} />
                    </div>

                    <h3>shape</h3>
                    <div>
                        <Button text={'搜索'} wrapClass={'Button-demo'} icon={'search'} shape={'regular'} />
                        <Button text={''} wrapClass={'Button-demo'} type={''} icon={'search'} size={''} shape={'circle'}
                            callback={()=>this.onClick(2)} />
                    </div>

                    <h3>disabled</h3>
                    <div>
                        <Button text={'disabled'} wrapClass={'Button-demo'} icon={'search'} shape={''} disabled={true} />
                    </div>

                    <br />
                    <hr />

                    <h3>API</h3>
                    <div>
                        <ul className="api-list">
                            <li>
                                <strong>text</strong>
                                <span>按钮的文本</span>
                            </li>
                            <li>
                                <strong>width</strong>
                                <span>按钮的宽度，如果不设置，显示为default值</span>
                            </li>
                            <li>
                                <strong>type</strong>
                                <span>按钮的类型，预设 `primary`、`secondary`、`default`、`ghost`，见上面的展示效果</span>
                            </li>
                            <li>
                                <strong>size</strong>
                                <span>按钮的尺寸，预设 `large`、`default`、`small`，见上面的展示效果</span>
                            </li>
                            <li>
                                <strong>icon</strong>
                                <span>按钮的内嵌图标，参见 <a href="#/icon">Icon组件</a> ，只需要写icon的名称即可，如 `search` </span></li>
                            <li>
                                <strong>shape</strong>
                                <span>按钮的形状，预设 `regular`、`circle` ，见上面的展示效果</span>
                            </li>
                            <li>
                                <strong>disabled</strong>
                                <span>按钮的不可用状态，见上面的展示效果</span>
                            </li>
                            <li>
                                <strong>wrapStyle</strong>
                                <span>按钮的外部容器样式，可以自由设置</span>
                            </li>
                            <li>
                                <strong>wrapClass</strong>
                                <span>按钮的外部容器样式类，可以自由添加</span>
                            </li>
                            <li>
                                <strong>callback</strong>
                                <span>按钮点击的回调函数，可以带参数</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DemoButton
