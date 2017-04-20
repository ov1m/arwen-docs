import React, { Component } from 'react';
import Header from './components/base/header';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ROUTES from './routes';

class App extends Component {
	constructor() {
		super();

		this.state = {
			page: 'home'
		}
	}

	renderContent() {
	  const renderPageContent = ROUTES.map(({ path, component }) => (
      <Route
        component={component}
        key={path}
        path={path}
      />
    ));

	  return (
	    <div className="content">
        {renderPageContent}
      </div>
    )
  }

	render() {
		return (
      <Router>
        <div className="wrapper">
          <Header />
          {this.renderContent()}
        </div>
      </Router>
		);
	}
}

export default App;
