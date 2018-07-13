import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
 
class RateBook extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 0
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    console.log(nextValue);
    console.log(this.props.book._id);
    this.setState({rating: nextValue});
    axios.post (`https://hanan-lior-publisher-app.herokuapp.com/user/rateBook`, {
        rate: nextValue,
        bookId: this.props.book._id,
    })
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div id="rateBook">
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
      	
    );
  }
}
 

export default RateBook;

