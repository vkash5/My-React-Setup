import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './index.css';

class Footer extends Component {

	render() {
		return (
			<div className="footer">
				<Grid>
					<Row>
						<Col xs={12}>
							copyright Intel corporations
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Footer;
