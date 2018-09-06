import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Overview from '../routes/Overview';
import Pitch from '../routes/Tuner/Pitch';
import Guitar from '../routes/Tuner/Guitar';

const Router = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Overview} />
			<Route path="/pitch" component={Pitch} />
			<Route path="/guitar" component={Guitar} />
		</div>
	</BrowserRouter>
);

export default Router;
