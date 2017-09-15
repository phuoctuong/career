import React from 'react';

export default class SpanUpdate extends React.Component {
	render() {
		return (
			<div>
				<input 
					placeholder={this.props.placeholder}
					onChange={(value) => this.props.handleSave(value)}
				/>
			</div>
		);
  }
}
