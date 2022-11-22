import React, { useState, useEffect } from 'react';
import './App.css';
import MonsterList from './components/monster-list/MonsterList';
import SearchBox from './components/search-box/SearchBox';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState('');

  const loadMonsters = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const fetchedMonsters = await res.json();
    setMonsters(fetchedMonsters)
  }

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setSearchField(event.target.value);
  }

  useEffect(() => {
    loadMonsters()
  }, []) 
  
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])


  return (
    <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox handleInputChange={handleInputChange} placeholder='search monsters' className='search-box' /> 
        <MonsterList filteredMonsters={filteredMonsters} />
    </div>
  )
}
  


export default App;
