import React, { Component } from 'react';
import MenuItems from './Menuitems';
import './Navbar.css';

class Navbar extends Component {
	

	render() {
		return (
			<nav className="NavbarItems">
				<ul className="nav-menu">
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<a className={item.clName} href={item.url}>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
