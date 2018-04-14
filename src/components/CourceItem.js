import React, { Component } from 'react';

class CourceItem extends Component {

	render() {
		var { match } = this.props;

		return (
			<div className='about-container'>
				{ match.params.cname }
			</div>
		);
	}

}

export default CourceItem;