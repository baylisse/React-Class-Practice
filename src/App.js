import { Component } from 'react';
import './App.css';

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
        <h1>Monsters Rolodex</h1>
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={ handleInputChange }
        />
        <div>
          {filteredMonsters.map((monster, index) => {
            return (
              <div key={index}>
                <h1>{monster.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
