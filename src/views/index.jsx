import React, { Component } from 'react';
import { Card,  CardImg, CardTitle, CardText, CardDeck,
		CardBody } from 'reactstrap';

export default class Index extends Component {

	render() {

		return (

			<div>
				<div className="row mt-5">
					<div className="col-md-3 text-center">
						<img src="https://media.licdn.com/dms/image/C4E03AQHbC8ltpjknYg/profile-displayphoto-shrink_200_200/0?e=1538006400&v=beta&t=9nqITbA-d2PYE7Pf8k2aLgVu8mY4BfWCnU7dLJmOTHE" alt="1" class="mt-3 rounded"/>
					</div>
					<div className="col-md-7 text-center ml-2 mt-2">
						<h3 className="text-center mt-1">Somethings about me</h3>
						<hr className="bg-light"/>
						<h6>
							Hi, I am Nishant, a B.Tech student at K.J Somaiya, Vidyavihar. I'am pursuing EXTC Engineering, although I am in EXTC, I prefer programming as my first choice. I am looking forward to work in the profile of Data Analytics and Web development. I'm a quick learner and get adapted to the situation am in easily. I like photography and cooking.
						</h6>
						<button className="btn btn-danger mt-2">View resume</button>
					</div>
				</div>
				<hr className="bg-light"/>
				<h3 className="text-center">Some of my skills and description</h3>
				<hr className="bg-light"/>
				
				<div>
						<CardDeck>
							<Card>
								<CardImg top width="100%" src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=256&w=180" alt="Card image cap" />
								<CardBody>
									<CardTitle>Data Analytics</CardTitle>

									<CardText>I have worked with few datasets (training and testing them) using python. Worked on a mini-project which is a movie recommendation system.</CardText>

								</CardBody>
							</Card>
							<Card>
								<CardImg top width="100%" src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=256&w=180" alt="Card image cap" />
								<CardBody>
									<CardTitle>Python</CardTitle>

									<CardText>I have worked on OpenCV and Dlib libraries. Data visualization libraries such as pandas and matplotlib. </CardText>

								</CardBody>
							</Card>
							<Card>
								<CardImg top width="100%" src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=256&w=180" alt="Card image cap" />
								<CardBody>
									<CardTitle>Web development</CardTitle>

									<CardText>I have a decent knowledge about HTML, CSS and Javascript. I have worked with Reactjs and Nodejs.</CardText>
								</CardBody>
							</Card>
						</CardDeck>
					
				</div>
			</div>

		);

	}
	toggle() {
		this.setState({
			fadeIn: !this.state.fadeIn
		});
	}
}
