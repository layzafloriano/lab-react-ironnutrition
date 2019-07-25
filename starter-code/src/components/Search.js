import React, { Component } from "react";

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = { name: '' };
  }

  handlerChange(event) {
    const {value} = event.target;
    this.setState(
      {
        name: value,
      }
    )
    console.log(this.state.name)
    this.props.handlerSearch(this.state)
  }

  render (){
    return(
      <form >
        <div class="field">
          <input type="text" name="name" class="input" placeholder="Search" value={this.state.search} onChange={(e) => this.handlerChange(e)} />
        </div>
      </form>
    );
  }
}


export default Search;