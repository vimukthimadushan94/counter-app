import React from 'react';

import Counters from './components/counters';
import NavBar from './components/navbar';

function App() {

  state = { 
    counters: [
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]
 };
handleIncrement = (counter) =>{
    const counters = [...this.state.counters];
    console.log(counters);
    const index = counters.indexOf(counter);
    
    counters[index] = {...counter};
    // console.log(counters[index].value+1);
    counters[index].value++;
    this.setState({counters});
};

handleReset = () =>{
    const counters = this.state.counters.map(c=>{
        c.value = 0;
        return c;
    });
    this.setState({counters});
}

handleDelete = (counterId) =>{
    const newarray = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters:newarray});
};
  return (
    <React.Fragment>
    <NavBar/>
    <main className="container">
    <Counters onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement}/>
    </main>
    </React.Fragment>
  );
}

export default App;
