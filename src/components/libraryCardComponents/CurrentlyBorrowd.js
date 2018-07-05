import React from 'react';
import axios    from 'axios';

class CurrentlyBorrowd extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
        book: ''
    }   
  
  }
 
  
  componentWillMount(){
    axios.get(`https://hanan-lior-publisher-app.herokuapp.com/book/GetBookById/${this.props.bookId}`)
     .then(bookData=>{
        this.setState({
            book: bookData.data});
     })
     .catch(err=>{console.log(err)})
  }


  render () {
    return (       
        <div id="mainBookChallengInfo">
            <article className="bookChallengInfo">
                <img src="/images/hazel-wood.png"/>
                <section>
                    <span>
                      {this.state.book.book_name}
                    </span>
                </section>    
                <section>
                    <img src="images/clock.png"></img>
                    <span>2 hour</span>
                </section>
            </article>
        </div>
    );
  
 
  }
 
}
 
export default CurrentlyBorrowd;