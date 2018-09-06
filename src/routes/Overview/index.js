import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class Overview extends PureComponent {
	render() {
		return (
			<div>
				Overview
				<h3>Tuner links</h3>
				<ul>
					<li>
						<Link to="/pitch">Pitch</Link>
					</li>
					<li>
						<Link to="/guitar">Guitar</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Overview;
