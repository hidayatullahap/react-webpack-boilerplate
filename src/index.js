import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			changer: true
		};
	}

	componentDidMount() {

	}

	getPosts() {
		axios.get('http://localhost:3000/api/v1/p')
			.then(function (response) {
				console.log(response.data)
			})
			.catch(function (error) {
				console.log(error)
			});
	}

	render() {
		return (
			<div className="App">
				<div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
					<h1>Tester</h1>
					<p>{this.state.changer + ''}</p>
					<button className="btn"
						onClick={() => this.setState({ changer: !this.state.changer })}>
						State Change
					</button>
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
							<button className="btn"
								onClick={() => {
									document.body.style.backgroundColor = '#ed6a5a';
								}}>
								ed6a5a
							</button>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
							<button className="btn"
								onClick={() => {
									document.body.style.backgroundColor = '#fbfffe';
								}}>
								fbfffe
							</button>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
							<button className="btn"
								onClick={() => {
									document.body.style.backgroundColor = '#f6a90a';
								}}>
								f6a90a
							</button>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
							<button className="btn"
								onClick={() => {
									document.body.style.backgroundColor = '#9bc1bc';
								}}>
								9bc1bc
							</button>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
							<button className="btn"
								onClick={this.getPosts}>
								Get Posts
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


WebFont.load({
	google: {
		families: ['Roboto:300,400,700']
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);