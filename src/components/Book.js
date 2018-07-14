import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';
import LibraryCard from './LibraryCard';
 
class Book extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
      book : {},
      summary : null,
      isBorrow: false,
      isWish: false
    }

    this.borrowBook = this.borrowBook.bind(this);
    this.wishBook = this.wishBook.bind(this);
    this.checkIfwish = this.checkIfwish.bind(this);
    this.checkIfBorrowd = this.checkIfBorrowd.bind(this);
  }


  /* this method check if book id is already in user boorowd_books */
  checkIfBorrowd(borrowd){
      var borrowdBooks = this.props.location.state.referrer.user.user.borrowd_books;
      borrowdBooks.forEach(borrowd_book=>{
          if(borrowd_book.book_id == this.props.location.state.referrer.book_id){
              borrowd = true;
              return borrowd;
          }
      })
      return borrowd;
  }

  /* this method check if book id is already in user wishlist */
  checkIfwish(wish){
      var wishBooks = this.props.location.state.referrer.user.user.wishlist;
      wishBooks.forEach(wish_book=>{
          if(wish_book.book_id == this.props.location.state.referrer.book_id){
              wish = true;
              return wish;
          }
      })
      return wish;
  }



  componentDidMount() {
     document.getElementById('headerTitle').innerHTML = 'Book';
      var wish = false;
      var borrowd = false;
      wish = this.checkIfwish();
      borrowd = this.checkIfBorrowd();
     axios.get (`https://hanan-lior-publisher-app.herokuapp.com/book/GetBookById/${this.props.location.state.referrer.book_id}`, {
      })
      .then(response =>{
        this.setState({
            book:response.data,
            summary:response.data.chapters[0].content.substring(0,200),
            isWish:wish,
            isBorrow:borrowd
            });
      })
      .catch(err =>{
        console.log(err);
      });   
  }





  borrowBook(){
      /* this method check if this book is in user's borrowd_books and update the DB */
      if(this.state.isBorrow){
            /* removing the book from the borrowd_books */
            axios.post(`https://hanan-lior-publisher-app.herokuapp.com/user/removeFromBorrowBooks`,{
            userId: this.props.location.state.referrer.user.user._id,
            bookId: this.props.location.state.referrer.book_id
          })
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });

          this.setState({isBorrow:false});
      }
      
      else{
            /* adding the book from the borrowd_books */
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

          this.setState({isBorrow:true});
      }
      
  }

  wishBook(){
      /* this method check if this book is in user's wish list and update the DB */
      if(this.state.isWish){
          /* removing the book from the wishlist */
          axios.post(`https://hanan-lior-publisher-app.herokuapp.com/user/removeFromWishList`,{
            userId: this.props.location.state.referrer.user.user._id,
            bookId: this.props.location.state.referrer.book_id
          })
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
          this.setState({isWish:false});
      }

      else
      {
          /* adding the book from the wishlist */
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

          this.setState({isWish:true});
      }
      
  }


  render () {

    const { isWish , isBorrow } = this.state;
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
                      return(<section key={category} className="bookCategory">
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
                  {
                    this.state.isBorrow ? <img src="/images/blue_eye.png"/> : <img src="/images/eye.png"/>
                  }
                  borrow
                </article>
                <span>
                  <article onClick={this.wishBook}>
                    {
                      this.state.isWish ? <img src="/images/blue_star.png"/> : <img src="/images/star.png"/>
                    }
                      wishlist
                  </article>
                </span>
            </section>
        </div>
    );
  }
 
}
 
export default Book;
