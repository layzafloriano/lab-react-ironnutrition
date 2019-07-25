import React, { Component } from "react";
// import FoodBox from "./FoodBox.js";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      calories: 0,
      quantity: 1,
    };
  }
  handlerChange(event) {
    const {value, name} = event.target;
    this.setState(
      {
        [name]: value,
      }
    )
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('handle submit: ', this.state)
    this.props.handlerAddFood(this.state)
    this.setState({
      name: "",
      image: "",
      calories: 0,
      quantity: 1,
    });
  }

  render() {
    const {name, image, calories, quantity} = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div class="field">
          <label>
            Name:
            <input type="text" name="name" class="input" value={name} onChange={(e) => this.handlerChange(e)} />
          </label>
        </div>
        
        <div class="field">
          <label>
            Image:
            <input type="text" name="image" class="input" value={image} onChange={(e) => this.handlerChange(e)} />
          </label>
        </div>

        <div class="field">
          <label>
            Calories:
            <input type="number" name="calories" class="input" value={calories} onChange={(e) => this.handlerChange(e)}/>
          </label>
        </div>
        <div class="field">
          <label>
            Quantity:
            <input type="number" name="quantity" class="input" value={quantity} onChange={(e) => this.handlerChange(e)} />
          </label>
        </div>
        <button type="submit" class="button">Submit</button>
      </form>
    );
  }
}

export default AddFood;
