import React, {Component} from 'react';

class Counter extends Component{

	render(){
		return (
			<div>
				{this.props.children}
				<span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
				<button onClick={() => this.props.onIncrement(this.props.counter)}  className="btn btn-secondary btn-small m-2">Incriment</button>
				<button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
			</div>
			) ;
	}

	formatCounter(){
		const {value} = this.props.counter;
		return value === 0 ? <h2>Zero</h2> : value;
	}

	getBadgeClasses(){
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}
} 

export default Counter;