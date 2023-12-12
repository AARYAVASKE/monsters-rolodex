import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    const { placeholder,  type } = this.props;
    return (
      <input
        className="search-box"
        typeof={type}
        placeholder={placeholder}
        onChange={this.props.onChange}
        type="search"
      />
    );
  }
}

export default SearchBox;
