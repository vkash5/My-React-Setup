import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Jumbotron, Button } from 'react-bootstrap';
import './index.css';
import Dashboard from '../Dashboard';
import fetchData from '../../library/js/fetchData';
import pubsub from 'pubsub-js';

class App extends Component {
	constructor(props) {

		super(props);

		this.state = {
			itemList: []
		};
	}

	componentDidMount() {
		const url = 'https://api.github.com/search/repositories?q=django';
		fetchData(url)
			.then(response => {
				this.setState({
					itemList: response.items
				}, ()=>{
					pubsub.publish('topicName',response);
				})
			});

	}

	render() {
		return (
			<div className='app-wrapper'>
				<Dashboard>
				</Dashboard>
				<Navbar inverse fixedTop>
					<Grid>
						<Navbar.Header>
							<Navbar.Brand>
								<a href="/">React App</a>
							</Navbar.Brand>
							<Navbar.Toggle />
						</Navbar.Header>
					</Grid>
				</Navbar>
				<Jumbotron>
					<Grid>
						<Row className="show-grid">
							<Col xs={12} sm={6} md={4} lg={3} >
								<div className="btn-col">
									<Button bsStyle="danger" bsSize='large'>
										Danger
									</Button>
								</div>
							</Col>
							<Col xs={12} sm={6} md={4} lg={3}>
								<div className="btn-col">
									<Button bsStyle="success" bsSize='large'>
										Success
									</Button>
								</div>
							</Col>
							<Col xs={12} sm={6} md={4} lg={3} >
								<div className="btn-col">
									<Button bsStyle="info" bsSize='large'>
										Info
									</Button>
								</div>
							</Col>
							<Col xs={12} sm={6} md={4} lg={3} >
								<div className="btn-col">
									<Button bsStyle="default" bsSize='large'>
										Default
									</Button>
								</div>
							</Col>
						</Row>
					</Grid>
					<Grid>
						<Row className="show-grid">
							{this.state.itemList.map((item, index) =>
								<Col key={index.toString()} xs={12} sm={6} md={4} lg={3} >
									<div className="btn-col">
										<h3 className='header'>
											{item.html_url}
										</h3>
										<div className='description'>
											{item.description}
										</div>
									</div>
								</Col>
							)}
						</Row>
					</Grid>
				</Jumbotron>
			</div>
		);
	}
}

export default App;