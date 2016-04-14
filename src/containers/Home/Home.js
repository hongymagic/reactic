import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Helmet
					title="Reactic – A React based single page app / static site template"
				/>
				Home
			</div>
		);
	}
}
