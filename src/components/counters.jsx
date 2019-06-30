import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    
    render() { 
        return (
        <div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter => 
            <Counter
            key={counter.props.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}>
            </Counter>
            )
            }
        </div> );
        
    }
}
 
export default Counters;