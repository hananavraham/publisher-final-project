import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';

class WishList extends React.Component{
 
  constructor (props) {
    super(props);
    this.state ={
      isLoading: false,
      book: '',
      book_name:'',
      imgSrc: ''
    }
  }
 

  componentDidMount(){
  this.setState({isLoading:true})
  setTimeout(()=>{},10000);
    axios.get(`https://hanan-lior-publisher-app.herokuapp.com/book/GetBookById/${this.props.book_id}`)
     .then(bookData=>{
        this.setState({
            isLoading: false,
            book: bookData.data,
            book_name: bookData.data.book_name,
            imgSrc: bookData.data.img
            
        });
     })
    .catch(error => this.setState({
        error,
        isLoading: false
    }));
  }


  render () {
    if (this.state.renderBook)
        return (<Redirect to={{
            pathname: '/Book',
            state: { referrer:{ book_id: this.props.book_id , user: this.props.user}}
     }} />)

        return (
          <div>
          <div id="wishListTitle">
              <span>
                  WishList
              </span>
          </div>
          <div id="wishList">
              <article onClick={()=>{console.log('redirectToBook');
                this.setState({renderBook: true})}}>>
                  <img src={this.state.imgSrc}></img>
                  <section>
                     <span>{this.state.book_name}</span>
                  </section>
              </article>
          </div>
          </div>
      );
  
    
  }
}
 
export default WishList;