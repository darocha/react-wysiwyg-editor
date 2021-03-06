'use strict';

var React = require('react'),
	EditableDiv = require('./EditableDiv.jsx');	

module.exports = React.createClass({
	displayName: 'Example',

	getInitialState: function() {
		return {
			content: '' // initial content
		};
	},

	handleContentChange: function(e) {
		this.setState({content: e.target.value});
	},

	render: function() {
		// Customize your editor with css rules
		var editorStyle = {
			overflow: 'auto',
			width: 300,
			height: 100,
			maxHeight: 100
		}
		
		return(
			<div className="form-group">
				<label>Comment:</label>
				<EditableDiv style={editorStyle} content={this.state.content} onChange={this.handleContentChange} />
			</div>
		);
	}
});