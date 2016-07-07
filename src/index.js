/**
 * @desc 项目入口
 * @author Jafeney
 * @dateTime 2016-07-05
 **/

import React from 'react'
import { render } from 'react-dom'

// router
import { Router, hashHistory } from 'react-router'
import routes from './routes'

render(
    (<Router history={hashHistory} routes={routes} />), document.getElementById('root')
)
