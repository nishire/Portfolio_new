import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class About extends Component {
	render() {
		return (
			<div class="mt-5" style={{ marginTop: '20px' }}  className="col sm-12 md-12 xs-12 lg-8">
				<br/>
				<h2 className="text-center mt-3">About My Online Courses</h2>
				<hr className="bg-light"/>

				<Breadcrumb>
					<BreadcrumbItem active>
						<h4 className="text-center">The Full Stack Web Development Bootcamp.</h4>
						<hr/>
						<p>The course had brief introduction and hands-on to HTML, CSS and Javascript. Working with Nodejs, Expressjs and jquery.</p>
						
					</BreadcrumbItem>
				</Breadcrumb>
				
				<Breadcrumb>
				<BreadcrumbItem active className="col sm-12 md-12 xs-12 lg-8">
						<h4 className="text-center">Tableau for Data Science and Advanced MS-Excel.</h4>
						<hr/>
						<p>Data Visualization is an art of presenting the data in a manner that even a non-analyst can understand it. Tableau is one of the fastest evolving Business Intelligence (BI) and data visualization tool. I worked with different functionalities provided by Tableau and things like Macros, Pivot Tables in excel. </p>

					</BreadcrumbItem>
				</Breadcrumb>
				
				<Breadcrumb>
				<BreadcrumbItem active className="col sm-12 md-12 xs-12 lg-8">
						<h4 className="text-center">MYSQL for Data Science and Business Intelligence</h4>
						<hr/>
						<p>Basic knowledge of a database and how it works. Also, how queries are written in SQL.</p>
					</BreadcrumbItem>
				</Breadcrumb>

			</div>
		)
	}
}

export default About