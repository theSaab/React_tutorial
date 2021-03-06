import React, { Component } from 'react';
import NavBar from './components/navbar'
import './App.css';
import Counters from './components/counters'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handle_increment = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counter[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handle_delete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters })
  }

  handle_reset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handle_reset}
            onIncrement={this.handle_increment}
            onDelete={this.handle_delete} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
