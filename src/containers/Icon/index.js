/**
 * @desc Royal组件演示 Icon图标
 * @author Jafeney
 * @dateTime 2016-07-06
 * */

import React, { Component } from 'react'
import Icon from '../../components/Basic/Icon/'
import Icons from '../../components/Basic/Icon/icons'

class DemoIcon extends Component {

    constructor(props) {
        super(props)
    }

    _renderIcons() {
        return Icons.map((icon) => {
            return ([
                <Icon
                    type={icon.split('icon-')[1]}
                    text={icon.split('icon-')[1]}
                    className={'Icon-demo'}
                    wrapClass={'Icon-wrap'}
                    textClass={'Icon-text'}
                />
            ])
        })
    }

    render() {
        return (
            <div className="wrapper">
                <h2 className="fixed">Icon 图标组件</h2>
                <div className="content">
                    <h3>All Icons</h3>
                    <div>
                        <p>具体参见 <a href="http://www.bootcss.com/p/font-awesome/"> `font-awesome`</a> 规范</p>
                        <div className="Icon-container">
                            { this._renderIcons() }
                        </div>
                    </div>
                    <hr/>
                    <h3>API</h3>
                    <div>
                        <ul className="api-list">
                            <li>
                                <strong>type</strong>
                                <span>Icon 的类型，即上面 Icon 的名称</span>
                            </li>
                            <li>
                                <strong>text</strong>
                                <span>Icon 的文本</span>
                            </li>
                            <li>
                                <strong>font</strong>
                                <span>Icon 和文本的尺寸</span>
                            </li>
                            <li>
                                <strong>color</strong>
                                <span>Icon 和文本的颜色</span>
                            </li>
                            <li>
                                <strong>bgColor</strong>
                                <span>Icon 的背景颜色</span>
                            </li>
                            <li>
                                <strong>style</strong>
                                <span>Icon 的样式</span>
                            </li>
                            <li>
                                <strong>className</strong>
                                <span>Icon 的样式类</span>
                            </li>
                            <li>
                                <strong>wrapStyle</strong>
                                <span>Icon 外部容器的样式</span>
                            </li>
                            <li>
                                <strong>wrapClass</strong>
                                <span>Icon 外部容器的样式类</span>
                            </li>
                            <li>
                                <strong>textStyle</strong>
                                <span>Icon 的文本的样式</span>
                            </li>
                            <li>
                                <strong>textClass</strong>
                                <span>Icon 的文本的样式类</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DemoIcon
