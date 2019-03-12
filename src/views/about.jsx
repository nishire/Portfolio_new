import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class About extends Component {
	render() {
		return (
			<div class="mt-5" style={{ marginTop: '20px' }}  className="col sm-12 md-12 xs-12 lg-8">
				<br/>
				<h2 className="text-center mt-3">About My Certifications</h2>
				<hr className="bg-light"/>

				<Breadcrumb>
					<BreadcrumbItem active>
						<h4 className="text-center">Jio Internship</h4>
						<hr/>
						<p>I did my internship on web and java in Jio with OSS team, I learned and also worked on their project (Jio Atlas)
						also I did a project on JDBC.</p>
						<button className="btn btn-info"onClick={()=> window.location='https://google.com'  }>View LOR</button>
					</BreadcrumbItem>
				</Breadcrumb>
				
				<Breadcrumb>
				<BreadcrumbItem active className="col sm-12 md-12 xs-12 lg-8">
						<h4 className="text-center">Mangal Essaki Innovations Pvt Ltd.</h4>
						<hr/>
						<p>I worked at Mangal Essaki and built a hybrid mobile application using React-Native, I had experience using React-Native at one hackathon.</p>
						<button className="btn btn-info">View certificate</button>
					</BreadcrumbItem>
				</Breadcrumb>
				
				<Breadcrumb>
				<BreadcrumbItem active className="col sm-12 md-12 xs-12 lg-8">
						<h4 className="text-center">Training at IT Kart</h4>
						<hr/>
						<p>I did training under IT Kart which is associated to EC Council for Ethical Hacking for 2 months and got certified</p>
						<button className="btn btn-info">View certificate</button>
					</BreadcrumbItem>
				</Breadcrumb>

			</div>
		)
	}
}

export default About