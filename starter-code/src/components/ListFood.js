import React, { Component } from "react";
import foods from '../foods.json'
import FoodBox from "./FoodBox.js";
import AddFood from "./AddFood.js";
import Search from "./Search.js";
import Tracking from "./Tracking";

class ListFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodsList: [...foods],
      tracking: [
        {
          "name": "Salad",
          "calories": 150,
          "image": "https://i.imgur.com/DupGBz5.jpg",
          "quantity": 0
        }
      ],
    };
    this.addFromForm = this.addFromForm.bind(this);
    this.search = this.search.bind(this);
    this.addListFood = this.addListFood.bind(this);
    this.newFoods = [... this.state.foodsList];
  }

  addFromForm(data) {
    const newFoods = [... this.state.foodsList];
    newFoods.unshift(data);
    this.setState({foodsList: [...newFoods]});
  }

  search(data) {
    let searchStr = data.name
    const filterFood = this.newFoods.filter((elem) => elem.name.toLowerCase().includes(searchStr.toLowerCase()));
    console.log(filterFood);
    console.log(searchStr);
    if (searchStr.length === 1) {
      this.setState({foodsList: [...this.newFoods]});
    } else {
      this.setState({foodsList: [...filterFood]});
    }
  }

  addListFood(food, quantity) {
    const newList = [...this.state.tracking];
    newList.push({...food})
    console.log(newList);
    this.setState({
      tracking: newList,
    })
  }

  render() {
    return (
      <div>
        <Tracking {...this.state}/>
        <Search handlerSearch={this.search} />
        <AddFood handlerAddFood={this.addFromForm} />
        {this.state.foodsList.map((food, index) => <FoodBox key={index} addToList={() => this.addListFood()} {...food}/>)}
      </div>
    );
  }
}

export default ListFood;
