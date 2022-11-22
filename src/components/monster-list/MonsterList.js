import React from "react";
import MonsterCard from '../monster-card/MonsterCard.js'
import './MonsterList.css';

const MonsterList = ({filteredMonsters}) => {
    return (
      <div className='card-list' >
        {filteredMonsters.map((monster, index) => {
          return (
            <MonsterCard key={index} monster={monster} />
          );
        })}
      </div>
    );
}

export default MonsterList;
