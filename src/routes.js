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

const routes = (
    <Route>
        <Route path="" component={Index} >
            <Route path="icon" component={Icon} />
            <Route path="button" component={Button} />
            <Route path="layout" component={Layout} />
            <Route path="checkbox" component={Checkbox} />
            <Route path="radio" component={Radio} />
        </Route>
    </Route>
)

export default routes
