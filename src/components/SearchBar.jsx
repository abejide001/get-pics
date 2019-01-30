import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.props.onSubmit}>
					<input
						type="text"
						placeholder="search for image"
						onChange={this.props.onChange}
						name="search"
						value={this.props.value}
					/>
				</form>
			</div>
		);
	}
}
