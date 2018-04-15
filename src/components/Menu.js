import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

const menus = [
	{to: '/', exact: true, name: 'Home'},
	{to: '/about', exact: true, name: 'About'},
	{to: '/cource', exact: false, name: 'Cource'},
	{to: '/leave', exact: true, name: 'Leave Me'}
];

class Menu extends Component {
	render() {
		return (
			<div className='Menu'>
				{ this.getCatMenus(menus) }
	            
			</div>
		);
	}

	getCatMenus(menus) {
		return menus.map((menu, index) => {
			return (
				<NavLink key={index} exact={menu.exact} to={menu.to} className='list-group-item'>{menu.name}</NavLink>
			);
		});
	}

}

export default Menu;