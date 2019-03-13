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
						<CardTitle style={{ textAlign: 'center' }}>Facial Recognition based Attendance System.</CardTitle>
						<CardText>Using face recognition algorithm the students present in the class are recognized and the attendance is updated accordingly.Picam is used for clicking the pictures which is connected to the rasberrypi. The raspi module uploads the photos on google drive which can be accesssed by our server(laptop) and the results are updated on google spreadsheet..</CardText>
						<CardLink href="https://github.com/Karna97/star-rating"><Button>View Project</Button></CardLink>
					</CardBody>
				</Card>
				<br/>
				<Card>
					<CardBody>
						<CardTitle style={{ textAlign: 'center' }}>Mini Project using Reactjs and Nodejs</CardTitle>
						<CardText>Made my online portfolio using reactjs. And a blogpostapp using nodejs, expressjs and MongoDB. </CardText>
						<CardLink href="https://github.com/Karna97/contactform-web-app"><Button>View Project</Button></CardLink>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default Project