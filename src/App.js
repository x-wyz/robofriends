import React from 'react'
import './App.css';

import CardList from './cardlist'
import Searchbox from './searchbox'
import { robots } from './robots'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search: ""
    }
    this.update = this.update.bind(this)
  }

  update(event){
    this.setState({
      search: event.target.value
    })
  }

  render(){

    let filtered = robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.search)
    })
    return (
      <div className="App tc">
        <h1>Robo Friends</h1>
        <Searchbox value={this.state.search} onChange={this.update}/>
        <CardList list={filtered} />
      </div>
    )
  }
}

export default App;
