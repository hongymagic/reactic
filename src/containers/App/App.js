import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import FontIcon from 'material-ui/lib/font-icon';
import MenuItem from 'material-ui/lib/menus/menu-item';

import {
	FullWidthSection,
} from '../../components';

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
				<AppBar
					title="Reactic"
					iconElementRight={
						<IconMenu
							iconButtonElement={
								<IconButton><FontIcon className="muidocs-icon-custom-github" style={{ color: "#ffffff", fill: "#ffffff" }} /></IconButton>
							}
							targetOrigin={{ horizontal: 'right', vertical: 'top' }}
							anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
						>
							<MenuItem primaryText="Refresh" />
							<MenuItem primaryText="Help" />
							<MenuItem primaryText="Sign out" />
						</IconMenu>
					}
				/>
				<FullWidthSection>
					{this.props.children}
				</FullWidthSection>
			</div>
		);
	}
}
