import React from 'react';
import axios from 'axios';

class RecentlyFinished extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
        book: '',
        isLoading: false,
        error: null,
        } 
  
  }
 
  componentDidMount(){
    this.setState({isLoading:true})
    axios.get(`https://hanan-lior-publisher-app.herokuapp.com/book/GetBookById/${this.props.recently_finished}`)
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
  
  render () {
    return (
        <div id="recentlyFinish">
            <p>recently finished</p>
            <article>
                <img src={this.state.book.imgContinueWriting}></img>
                <section>
                    Rate This Book
                </section>
                <section>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </section>
            </article>
        </div>
    );
  }
}
 
export default RecentlyFinished;