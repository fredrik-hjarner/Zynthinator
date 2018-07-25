// import PropTypes from 'prop-types';
import { DropDownMenu } from 'components/semantic++';
import * as React from 'react';
import {
	Connect,
	Create,
	Examples as ExamplesMenu,
	File,
	// Delete,
	History,
	Tests,
} from './menus';

export class Navbar extends React.Component { // eslint-disable-line
	public componentDidMount() {
		($('.ui.dropdown') as any).dropdown({ /* todo this shit should be in the menu!! */ // eslint-disable-line
			action: 'hide',
			delay: {
				hide: 400,
				show: 0,
			},
			duration: 0,
			on: 'hover',
		});
	}

	public render() {
		return (
			<DropDownMenu>
				<File />
				<Create />
				<Connect />
				{/* <Delete /> */}
				<ExamplesMenu />
				<History />
				<Tests />
			</DropDownMenu>
		);
	}
}

/* Navbar.propTypes = {
  path: PropTypes.string.isRequired,
}; */
