import { Component } from "react";
import './card.styles.css';


class Card extends Component{

    render(){
        const { id, name, email } =  this.props.monsters
        return(
            <div className="card-container" key={id}>
              <img alt="" src={`https://robohash.org/${id}?set=set2`} />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
        )
    }
}

export default Card;