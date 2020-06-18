import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChage = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    //callback from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Seach</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChage}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
