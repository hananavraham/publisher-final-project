import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';
import Book from '../Book';
class CurrentlyBorrowed extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
        isLoading: false,
        book: '',
        book_name:'',
        readingTime: '',
        imgSrc: '',
        renderBook: false,
        error: null
      }  

   // this.redirectToBook = this.redirectToBook.bind(this);
  }
 


  
  componentDidMount(){
    this.setState({isLoading:true})
    axios.get(`https://hanan-lior-publisher-app.herokuapp.com/book/GetBookById/${this.props.book_id}`)
     .then(bookData=>{
        this.setState({
            isLoading: false,
            book: bookData.data,
            book_name: bookData.data.book_name,
            imgSrc: bookData.data.img
            
        });
        axios.get(`https://hanan-lior-publisher-app.herokuapp.com/book/readingTime/${bookData.data.book_name}`)
        .then(bookData=>{
        console.log(bookData.data[0].readingTime);
        this.setState({readingTime: bookData.data[0].readingTime});
        })
        .catch(error => console.log('readingTime error'))
     })
    .catch(error => this.setState({
        error,
        isLoading: false
    }));
  }

 /* redirectToBook(){
    console.log('redirectToBook');
    return <Redirect to='/Book' />
  }*/

  render () {
   
    const { book, isLoading, error } = this.state;

    
    if(this.state.renderBook){
         return <Redirect to='/Book' />
    }

    return (       
        <div id="mainBookChallengInfo">
            <article className="bookChallengInfo" onClick={()=>{console.log('redirectToBook');
                    this.setState({renderBook: true})}}>
                <img src={this.state.imgSrc}/>
                <section>
                    <span>
                       {!isLoading && book.book_name ? book.book_name : null}
                    </span>
                </section>    
                <section>
                    <img src="images/clock.png"></img>
                    <span>{this.state.readingTime ? this.state.readingTime: null} min</span>
                </section>
            </article>
        </div>
    );
  
 
  }
 
}
 
export default CurrentlyBorrowed;