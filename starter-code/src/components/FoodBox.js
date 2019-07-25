import React, {Component} from "react";

class FoodBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name,
      quantity: 1,
      totalCalories: 0,
    }
    this.handlerChange = this.handlerChange.bind(this)
  }


  handlerChange(event){
    const {value} = event.target;
    console.log(this.state.quantity)
    let currQuantity = value;
    let cals = currQuantity * this.props.calories
    this.setState({
      quantity: currQuantity,
      totalCalories: cals,
    })
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={this.state.quantity} onChange={(e) => this.handlerChange(e)}/>
              </div>
              <div className="control">
                <button onClick={() => this.props.addToList({...this.state, calories: this.state.totalCalories}, this.state.quantity)} className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
};

export default FoodBox;
