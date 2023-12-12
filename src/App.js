import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ Monsters: users });
      })
      
  }

  handleStateChange = (event)=> {

    const searchField = event.target.value.toLowerCase();
    this.setState({searchField: searchField})
  }


  render() {
    const filtered = this.state.Monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">
          Monsters Rolodex

        </h1>
        <SearchBox
          placeholder="Search Monster"
          onChange={this.handleStateChange}
        />
        <CardList FilteredMonsters={filtered} />
      </div>
    );
  }
}



export default App;
