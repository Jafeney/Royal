import React from 'react'
import { Route } from 'react-router'

import Index from './containers/'

import Icon from './containers/Icon/'
import Layout from './containers/Layout/'

import Button from './containers/Button/'

const routes = (
    <Route>
        <Route path="" component={Index} >
            <Route path="icon" component={Icon} />
            <Route path="button" component={Button} />
            <Route path="layout" component={Layout} />
        </Route>
    </Route>
)

export default routes
