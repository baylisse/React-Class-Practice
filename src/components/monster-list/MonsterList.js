import { Component } from "react";

class MonsterList extends Component {
  render() {
    return (
      <div>
        {this.props.filteredMonsters.map((monster, index) => {
          return (
            <div key={index}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MonsterList;
