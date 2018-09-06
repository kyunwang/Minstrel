import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class Header extends PureComponent {
	static propTypes = {};

	render() {
		return (
			<div>
				<Link to="/">Back</Link>
			</div>
		);
	}
}

export default Header;
