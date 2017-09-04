import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './index.css';
import Intel from '../../assets/images/Intel.png';

class Header extends Component {

	constructor(props) {

		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div className="header">
				<Grid>
					<Row>
						<Col xs={6} md={4}>
							<Image className='logo' src={Intel} rounded />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Header;
