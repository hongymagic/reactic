import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

@connect(
	state => ({}),
	{ push: routerActions.push }
)
export default class App extends Component {
	static propTypes = {
		children: PropTypes.object.isRequired,
	}

	static contextTypes = {
		store: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
