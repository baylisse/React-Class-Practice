import { Component } from "react";
import MonsterCard from '../monster-card/MonsterCard.js'
import './MonsterList.css';

class MonsterList extends Component {
  render() {
    return (
      <div className='card-list' >
        {this.props.filteredMonsters.map((monster, index) => {
          return (
            <MonsterCard key={index} monster={monster} />
          );
        })}
      </div>
    );
  }
}

export default MonsterList;
