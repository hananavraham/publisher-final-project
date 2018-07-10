import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';
import Book from '../Book';


class ContinueWriting extends React.Component{
 
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

  }
 


  
  componentDidMount(){
    this.setState({isLoading:true})
    axios.get(`https://hanan-lior-publisher-app.herokuapp.com/book/GetBookById/${this.props.book_id}`)
     .then(bookData=>{
        this.setState({
            isLoading: false,
            book: bookData.data,
            book_name: bookData.data.book_name,
            imgSrc: bookData.data.imgContinueWriting
            
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

    
    if(this.state.renderBook){
         return <Redirect to='/Book'/>
    }

    return (       
         <div id="continueWritingBook" onClick={()=>{console.log('redirectToBook');
                this.setState({renderBook: true})}}>
            <article>
                <img src={this.state.imgSrc}></img>
                <section>
                      {!isLoading && book.book_name ? book.book_name : null}
                </section>
                <table>
                <tbody>
                    <tr>
                        <td> {!isLoading && book.chapters  ? book.chapters.length : 0}</td>
                        <td> {!isLoading && book.followers  ? book.followers.length : 0}</td> 
                    </tr>
                    <tr>
                        <td>Chapter</td>
                        <td>followers</td>
                    </tr>
                    </tbody>
                </table>
                <button>EDITING mode</button>
            </article>
            <section>
                <p>! Last Chapter wrote 12 Days Ago</p>
            </section>
        </div>
    );
  
 
  }
 
}
 
export default ContinueWriting;