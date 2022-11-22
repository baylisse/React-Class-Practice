import { Component } from 'react';
import './App.css';
import MonsterList from './components/monster-list/MonsterList';
import SearchBox from './components/search-box/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState(() => {
      return { searchField: event.target.value };
    });
  }  

  render() {
    const { monsters, searchField } = this.state;
    const { handleInputChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox handleInputChange={handleInputChange} placeholder='search monsters' className='search-box' /> 
        <MonsterList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
