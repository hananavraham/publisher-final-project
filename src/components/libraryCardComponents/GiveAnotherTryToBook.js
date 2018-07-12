import React from 'react';
import axios from 'axios';

class GiveAnotherTryToBook extends React.Component{
 
  constructor (props) {
    super(props);
      this.state = {
        book: '',
        isLoading: false,
        error: null,
        }      

    this.giveAnotherTryToBook = this.giveAnotherTryToBook.bind(this);
  }

  

   componentDidMount(){
    this.setState({isLoading:true})
    axios.get(`https://hanan-lior-publisher-app.herokuapp.com/book/GetBookById/${this.props.unlikedBook}`)
    .then(bookData=>{
        console.log(bookData.data);
        this.setState({
            isLoading: false,
            book: bookData.data});
     })
    .catch(error => this.setState({
        error,
        isLoading: false
     }));
  }

  giveAnotherTryToBook(){
    console.log(this.props.userId);
      axios.post('https://hanan-lior-publisher-app.herokuapp.com/user/borrowNewBook' , {
        _id: this.props.userId ,
        book: this.props.unlikedBook
      });
      axios.post('https://hanan-lior-publisher-app.herokuapp.com/user/removeFromUnliked' , {
          _id: this.props.userId ,
          book: this.props.unlikedBook
      })
      .catch(error => (console.log(error))); 
  }
  
  render () {

    const { book, isLoading, error } = this.state;

    if(!this.props.unlikedBook || !this.state.book){
      return (   
        <div id="bookAnotherTray">
            <p>give these books another try!</p>
            <article>
                <img src="images/whanBook.png"></img>
                <section>
                    "...loading"
                </section>
                <button>start again</button>
            </article>
        </div>
      )
    }

    return (
         <div id="bookAnotherTray">
            <p>give these books another try!</p>
            <article>
                <img src={book.img}></img>
                <section>
                    {book.reviews[0] ? book.reviews[0].text : "no reviews"}
                </section>
                <button onClick={this.giveAnotherTryToBook}>start again</button>
            </article>
        </div>
    );
 }
 
}
 
export default GiveAnotherTryToBook;