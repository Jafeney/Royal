/**
 * @desc 路由配置
 * @author Jafeney
 * @dateTime 2016-07-05
 **/

import React from 'react'
import { Route } from 'react-router'

import Index from './containers/'

import Icon from './containers/Icon/'
import Layout from './containers/Layout/'

import Button from './containers/Button/'
import Checkbox from './containers/Checkbox/'
import Radio from './containers/Radio/'

import Affix from './containers/Affix/'
import Alert from './containers/Alert/'
import BackTop from './containers/BackTop/'
import Badge from './containers/Badge/'
import BreadCrumb from './containers/BreadCrumb/'
import Calendar from './containers/Calendar/'
import Card from './containers/Card/'
import Carousel from './containers/Carousel/'
import Cascader from './containers/Cascader/'
import Collapse from './containers/Collapse/'
import DatePicker from './containers/DatePicker/'
import Dropdown from './containers/Dropdown/'
import Form from './containers/Form/'
import Input from './containers/Input/'
import InputNumber from './containers/InputNumber/'
import LocaleProvider from './containers/LocaleProvider/'
import Markdown from './containers/Markdown/'
import Menu from './containers/Menu/'
import Message from './containers/Message/'
import Modal from './containers/Modal/'
import Notification from './containers/Notification/'
import Pagination from './containers/Pagination/'
import PopConfirm from './containers/PopConfirm/'
import PopOver from './containers/PopOver/'
import Progress from './containers/Progress/'
import QueueAnimation from './containers/QueueAnimation/'
import Rate from './containers/Rate/'
import Select from './containers/Select/'
import Slider from './containers/Slider/'
import Spin from './containers/Spin/'
import Steps from './containers/Steps/'
import Switch from './containers/Switch/'
import Table from './containers/Table/'
import Tabs from './containers/Tabs/'
import Tag from './containers/Tag/'
import Timeline from './containers/Timeline/'
import TimePicker from './containers/TimePicker/'
import Tooltip from './containers/Tooltip/'
import Transfer from './containers/Transfer/'
import Tree from './containers/Tree/'
import TreeSelect from './containers/TreeSelect/'
import Upload from './containers/Upload/'

const routes = (
    <Route>
        <Route path="" component={Index} >
            <Route path="icon" component={Icon} />
            <Route path="button" component={Button} />
            <Route path="layout" component={Layout} />
            <Route path="checkbox" component={Checkbox} />
            <Route path="radio" component={Radio} />
            <Route path="affix" component={Affix} />
            <Route path="alert" component={Alert} />
            <Route path="backtop" component={BackTop} />
            <Route path="badge" component={Badge} />
            <Route path="breadcrumb" component={BreadCrumb} />
            <Route path="calendar" component={Calendar} />
            <Route path="card" component={Card} />
            <Route path="carousel" component={Carousel} />
            <Route path="cascader" component={Cascader} />
            <Route path="collapse" component={Collapse} />
            <Route path="datePicker" component={DatePicker} />
            <Route path="dropdown" component={Dropdown} />
            <Route path="form" component={Form} />
            <Route path="input" component={Input} />
            <Route path="inputnumber" component={InputNumber} />
            <Route path="localeprovider" component={LocaleProvider} />
            <Route path="markdown" component={Markdown} />
            <Route path="menu" component={Menu} />
            <Route path="message" component={Message} />
            <Route path="modal" component={Modal} />
            <Route path="notification" component={Notification} />
            <Route path="pagination" component={Pagination} />
            <Route path="popconfirm" component={PopConfirm} />
            <Route path="popover" component={PopOver} />
            <Route path="progress" component={Progress} />
            <Route path="queueanimation" component={QueueAnimation} />
            <Route path="rate" component={Rate} />
            <Route path="select" component={Select} />
            <Route path="slider" component={Slider} />
            <Route path="spin" component={Spin} />
            <Route path="steps" component={Steps} />
            <Route path="switch" component={Switch} />
            <Route path="table" component={Table} />
            <Route path="tabs" component={Tabs} />
            <Route path="tag" component={Tag} />
            <Route path="timeline" component={Timeline} />
            <Route path="timepicker" component={TimePicker} />
            <Route path="tooltip" component={Tooltip} />
            <Route path="transfer" component={Transfer} />
            <Route path="tree" component={Tree} />
            <Route path="treeselect" component={TreeSelect} />
            <Route path="upload" component={Upload} />

        </Route>
    </Route>
)

export default routes
