import React, { Component } from 'react';

class Dashboard extends Component {

	constructor(props) {

		super(props);

		this.state = {
			response: ''
		};
	}
	componentDidMount() {
		const url = 'https://api.github.com/search/repositories?q=django';
		fetch(url)
			.then((response) => {
				response.json();
				this.setState({
					response
				},()=> console.log(this.state.response))
			})
			.catch(err => err());

	}
	render() {
		return (
			<div className="dashboard">
				<div className="content">
					{[1,2,3,4,5,6].map((item, index) =>
                    <div key={index.toString()} className='item'>
                            <h3 className='header'>
                                Heading
                            </h3>
							<div className='description'>
                                 Description Description Description Description
                            </div>
                    </div>
                )}
				</div>
			</div>
		);
	}
}

export default Dashboard;
