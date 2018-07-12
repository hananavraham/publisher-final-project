import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';
import LibraryCard from './LibraryCard';
 
class Book extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
      book : {},
      summary : null
    }

    this.borrowBook = this.borrowBook.bind(this);
    this.wishBook = this.wishBook.bind(this);

  }


  componentDidMount() {

     axios.get (`https://hanan-lior-publisher-app.herokuapp.com/book/GetBookById/${this.props.location.state.referrer.book_id}`, {
      })
      .then(response =>{
        console.log(response.data);
        console.log(response.data.chapters[0].content)
        this.setState({
            book:response.data,
            summary:response.data.chapters[0].content.substring(0,200)
            });
      })
      .catch(err =>{
        console.log(err);
      });   
  }

  borrowBook(){
      axios.post(`https://hanan-lior-publisher-app.herokuapp.com/user/borrowNewBook`,{
        _id: this.props.location.state.referrer.user.user._id,
        book: this.props.location.state.referrer.book_id
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
        });
  }

  wishBook(){
      axios.post(`https://hanan-lior-publisher-app.herokuapp.com/user/AddWishListUser`,{
        _id: this.props.location.state.referrer.user.user._id,
        bookId:this.props.location.state.referrer.book_id
      })
      .then(function (response) {
          console.log(response);
        })
      .catch(function (error) {
          console.log(error);
        });
  }


  render () {
    return (
        <div id="book">
            <img className="bookImage" src={this.state.book.img}/>
            <article>
              <section>
                  <img src="/images/like.png"/>
                  <span>1 </span>
              </section>
              <section>
                  <img src="/images/comment.png"/>
                  <span>1</span>
                </section>
              <section>
                  <img src="/images/share.png"/>
                  <span>1</span>
              </section>
            </article>
            <h1>{this.state.book.book_name}</h1>
            <h2>by:  </h2><h3>{this.state.book.authorName} </h3>
            <h4> Summary </h4>
            <p>
              {this.state.summary}
            </p>
            <div>
                {
                    this.state.book.categories ? this.state.book.categories.map(category=>{
                      return(<section className="bookCategory">
                          <h5>#{category}</h5>
                        </section>) 
                    })  : <div></div>
                }
            </div>
            <section id="writerProgress">
              <h3> writer progress </h3>
              <article> 
                <span> </span>
              </article>
            </section>
            <section id="bookChoice">
                <article onClick={this.borrowBook}>
                  <img src="/images/eye.png"/>
                  borrow
                </article>
                <span>
                  <article onClick={this.wishBook}>
                    <img src="/images/star.png"/>
                      wishlist
                  </article>
                </span>
            </section>
        </div>
    );
  }
 
}
 
export default Book;
