import React from 'react'
import './App.css';

import CardList from '../components/cardlist'
import Searchbox from '../components/searchbox'
import Scroll from '../components/scroll'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search: "",
      robots: []
    }
    this.update = this.update.bind(this)
  }

  update(event){
    this.setState({
      search: event.target.value
    })
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(users => {
        this.setState({
          robots: users
        })
      })
  }

  render(){
    const { search, robots } = this.state;
    let filtered = robots.filter(robot => {
      return robot.name.toLowerCase().includes(search.toLowerCase())
    })
    return (
      <div className="App tc">
        <h1>Robo Friends</h1>
        <Searchbox value={search} onChange={this.update}/>
        <Scroll>
          <CardList list={filtered} />
        </Scroll>
      </div>
    )
  }
}

export default App;
