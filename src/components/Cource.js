import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import CourceItem from './CourceItem';

class Cource extends Component {

	render() {
		var { match } = this.props;

		return (
			<div>
				<NavLink exact to={`${ match.url }/reactjs`} className='list-group-item'>React JS</NavLink>
				<NavLink exact to={`${ match.url }/javascript`} className='list-group-item'>Javascript</NavLink>
			
				<Route path={`${ match.url }/:cname`} component={CourceItem} />
			</div>
			
		);
	}

}

export default Cource;