import React from "react";

class SearchBar extends React.Component {
  onInputChage(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChage}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
