import React, { Component } from 'react';
import MenuItems from './Menuitems';
import { Button } from '../Button/Button';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<nav className="NavbarItems">
				<h1 className="navbar-logo" />
				<div className="menu-icon" />
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

				<Button>Sair</Button>
			</nav>
		);
	}
}

export default Navbar;
