import React from 'react';
import SpanUpdate from './SpanUpdate.jsx';

export default class Header extends React.Component {
	handleChange(value) {
		if(value.length !== 0) {
			this.props.addTodo(value);
		}
	}

	render() {
		return (
			<header className='header'>
				<h1>todos</h1>
				<SpanUpdate 
					placeholder="Span Update placeholder"
					handleChange={this.handleChange.bind(this)}
					/>
			</header>
		);
	}
}
