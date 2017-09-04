import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import './index.css';
import fetchData from '../../library/js/fetchData';

class Dashboard extends Component {

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
				})
			});
	}

	render() {
		return (
			<div className="dashboard">
					<Grid>
						<Row className="show-grid">
							{this.state.itemList.map((item, index) =>
								<Col key={index.toString()} xs={12} sm={6} md={4} lg={3} >
									<div className="btn-col">
										<h3 className='heading'>
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
			</div>
		);
	}
}

export default Dashboard;
