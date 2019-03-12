import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { Card, CardBody} from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';
import fire from'../database/fire'

class Contact extends Component {
	constructor(props){
		super(props)
		this.state={
			username: '',
			password: '',
			subject: '',
			message: ''
		}
	}
	
	handle(e){
		e.preventDefault()
		console.log(e)
		this.setState({
			[e.target.name]: e.target.value
		});	
	}
	
	Click() {
		fire.database().ref('saravana-firebase').push({
			username: this.state.username,
			password: this.state.password,
			subject: this.state.subject,
			message: this.state.message
		})
	}
	render() {
		console.log(this.state)
		return (
			<div >
				<Card className="mt-5" style={{ marginTop: '50px' }}>
					<CardBody>
						<h4 className="text-center">Contact details</h4>
						<InputGroup>
							<Input placeholder="username" name="username" onChange={this.handle.bind(this)} value={this.state.username} />
						</InputGroup>
						<br/>
						<InputGroup>
							<Input placeholder="password" name="password" onChange={this.handle.bind(this)} value={this.state.password} />
						</InputGroup>
						<br/>
						<InputGroup>
							<Input placeholder="Subject" name="subject" onChange={this.handle.bind(this)} value={this.state.subject} />
						</InputGroup>
						<br/>
						<InputGroup>
							<Input placeholder="Message" name="message" onChange={this.handle.bind(this)} value={this.state.message} />
						</InputGroup>
						<br/>
							<Button type="submit" color="primary" onClick={this.Click.bind(this)}>Submit</Button>
						
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default Contact