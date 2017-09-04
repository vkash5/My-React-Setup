import React, { Component } from 'react';
import './index.css';
import Header from '../Header';
import Dashboard from '../Dashboard';
import Footer from '../Footer';

class App extends Component {
	constructor(props) {

		super(props);
	}

	render() {
		return (
			<div className='app-wrapper'>
				<Header>
				</Header>
				<Dashboard>
				</Dashboard>
				<Footer>
				</Footer>
			</div>
		);
	}
}

export default App;