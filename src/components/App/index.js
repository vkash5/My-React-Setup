import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Jumbotron, Button } from 'react-bootstrap';
import './index.css';
import Dashboard from '../Dashboard';
class App extends Component {
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
									<Button bsStyle="danger" bgSize='small'>
										Danger
									</Button>
								</div>
							</Col>
							<Col xs={12} sm={6} md={4} lg={3}>
								<div className="btn-col">
									<Button bsStyle="success" bgSize='small'>
										Success
									</Button>
								</div>
							</Col>
							<Col xs={12} sm={6} md={4} lg={3} >
								<div className="btn-col">
									<Button bsStyle="info" bgSize='small'>
										Info
									</Button>
								</div>
							</Col>
							<Col xs={12} sm={6} md={4} lg={3} >
								<div className="btn-col">
									<Button bsStyle="default" bgSize='small'>
										Default
									</Button>
								</div>
							</Col>
						</Row>
					</Grid>
				</Jumbotron>
			</div>
		);
	}
}

export default App;