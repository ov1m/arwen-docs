import React, { Component } from 'react';
import { ComponentProps } from '../../components';

class Home extends Component {

	render() {
		return (
			<div className="componentsPage">
				<h1>Component Page</h1>
        <ComponentProps />
			</div>
		);
	}
}

export default Home;
