import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import { Switch, Router, Route } from 'react-router-dom'

import Base from './layout/Base'

import Index from './views/index'
import About from './views/about'
import Contact from './views/contact'
import Project from './views/project'
import NotFound from './views/NotFound'

let history = createBrowserHistory()

export default class Global extends Component {
	render() {
		return (
			<Base>
				<Router history={history}>
					<Switch>
						<Route exact component={Index} path="/" />
						<Route exact component={About} path="/about" />
						<Route exact component={Contact} path="/contact" />
						<Route exact component={Project} path="/project" />
						<Route exact component={NotFound} path="*" />
					</Switch>
				</Router>
			</Base>
		)
	}
}