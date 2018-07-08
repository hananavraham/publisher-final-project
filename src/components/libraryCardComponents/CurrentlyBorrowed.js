import React from 'react';
import axios from 'axios';

class CurrentlyBorrowed extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
        isLoading: false,
        book: '',
        book_name:'',
        readingTime: '',
        imgSrc: '',
        error: null
      }  
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

  render () {
   
    const { book, isLoading, error } = this.state;

  
    return (       
        <div id="mainBookChallengInfo">
            <article className="bookChallengInfo">
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