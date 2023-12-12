import { Component } from "react";
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    const { FilteredMonsters } = this.props;
    return (
      <div className="card-list">
        {FilteredMonsters.map((monsters) => {
          return <Card monsters={monsters}  />
        })}
      </div>
    );
  }
}

export default CardList;