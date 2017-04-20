import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from './../../../routes';

const Header = () => {
  const renderPageNav = ROUTES.map(({ name, path }) => (
    <li key={path}>
      <Link to={path}>
        {name}
      </Link>
    </li>
  ));

	return(
	  <header className="mainHeader">
      <div id="logo">arwen</div>
      <nav className="mainNav">
        <ul>
          {renderPageNav}
        </ul>
      </nav>
    </header>
	);
};


export default Header;
