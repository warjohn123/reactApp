import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: 'Initial state'
		};

		this.updateState = this.updateState.bind(this);
	}

	updateState(e) {
		this.setState({data: e.target.value})
	}

	render() {
		return (
		<div>
			<input type="text" onChange = {this.updateState} value = {this.state.data}/>
			<h4>{this.state.data}</h4>
			</div>
		);
	}
 }

export default App;