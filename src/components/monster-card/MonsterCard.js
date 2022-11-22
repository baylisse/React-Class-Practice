import { Component } from "react";
import './MonsterCard.css'


class MonsterCard extends Component {
    
  render() {
    const { name, email } = this.props.monster;
    return (
      <div key={this.props.key} className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${this.props.key}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default MonsterCard