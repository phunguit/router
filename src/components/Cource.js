import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

class Cource extends Component {

	render() {
		var { match } = this.props;

		return (
			<div>
			<NavLink exact to={`${ match.url }/reactjs`} className='list-group-item'>React JS</NavLink>
			<NavLink exact to={`${ match.url }/javascript`} className='list-group-item'>Javascript</NavLink>
			</div>
		);
	}

}

export default Cource;