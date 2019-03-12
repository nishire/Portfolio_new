import React, { Component } from 'react'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Base extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="dark" dark className="fixed-top" expand="md">
					<NavbarBrand href="/">Nishant Hiremath</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							
							<NavItem>
								<NavLink href="/">Home</NavLink>
							</NavItem>
							
							<NavItem>
								<NavLink href="/about">About</NavLink>
							</NavItem>
							
							<NavItem>
								<NavLink href="/contact">Contact</NavLink>
							</NavItem>
							
							<NavItem>
								<NavLink href="/project">Project</NavLink>
							</NavItem>
							
							<NavItem>
								<NavLink href="https://github.com/karna97">GitHub</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<div className="container" style={{ minHeight: 'calc(100vh - 124px)' }}>
					{this.props.children}
				</div>
				<footer className="text-dark text-center mt-2" style={{ minHeight: '60px' }}>
					<div className="container ">
						<p>Nishant &copy; 2018 - {this.getCurrentYear()}</p>
					</div>
				</footer>
			</div>
		)
	}

	getCurrentYear() {
		let year = new Date().getFullYear()
		return year.toString().substr(2)
	}
}

export default Base