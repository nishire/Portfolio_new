import React, { Component } from 'react'
import { Card, CardText, CardBody,
		CardTitle, Button, CardLink } from 'reactstrap';

class Project extends Component {
	render() {
		return (
			<div className="mt-5 col sm-10 md-8 xs-12 lg-8">
				<br/>
				<h2 className="text-center">About My Projects</h2>
				<hr className="bg-light"/>

				<Card>
					<CardBody>
						<CardTitle style={{ textAlign: 'center' }}>Analysis of facial recognition algorithms.</CardTitle>
						<CardText>Facial recognition algorithms based on OpenCV and Dlib libraries were compared considering the parameters such as distance of face from the camera, face orientation and illumination. The algorithm suitable for classroom conditions was found.</CardText>
						<CardLink href="https://github.com/Karna97/chatbot" ><Button >View Project</Button></CardLink>
					</CardBody>
				</Card>
				<br/>
				<Card>
					<CardBody>
						<CardTitle style={{ textAlign: 'center' }}>Star-rating</CardTitle>
						<CardText>I built a basic star rating mechanism using js.</CardText>
						<CardLink href="https://github.com/Karna97/star-rating"><Button>View Project</Button></CardLink>
					</CardBody>
				</Card>
				<br/>
				<Card>
					<CardBody>
						<CardTitle style={{ textAlign: 'center' }}>ContactForm-web-app</CardTitle>
						<CardText>Its a basic contact form which renders infos in real time for this I used firebase and vanilla js.</CardText>
						<CardLink href="https://github.com/Karna97/contactform-web-app"><Button>View Project</Button></CardLink>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default Project