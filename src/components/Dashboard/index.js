import React, { Component } from 'react';
import './index.css';
import pubsub from 'pubsub-js';

class Dashboard extends Component {

	constructor(props) {

		super(props);

		this.state = {
		};
	}

	handelData = (topicName, response) => {
		console.log(response);
	}

	componentDidMount() {
		this.subscriber = pubsub.subscribe('topicName', this.handelData);
	}

	componentWillUnmount() {
		pubsub.unsubscribe(this.subscriber);
	}
	
	render() {
		return (
			<div className="dashboard">
			</div>
		);
	}
}

export default Dashboard;
