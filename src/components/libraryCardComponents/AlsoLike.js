import React from 'react';
import { Route, Redirect } from 'react-router';
class AlsoLike extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
      isLoading: false,
      renderBook: false
    }

   
  }
 
  componentDidMount(){
    this.setState({books: this.props.offerdBooks});
  }

  render(){

      if (this.state.renderBook)
        return (<Redirect to={{
            pathname: '/Book',
            state: { referrer:{ book_id: this.state.bookId , user: this.props.user}}
      }} />)

      if(this.state.books && this.state.books.length > 0){
          return this.state.books.map(book=>{
           return <img key={book._id} src={book.imgContinueWriting} onClick={()=>{
              this.setState({renderBook:true,bookId:book._id })}}></img>
        })
      }

      return (<div>Loading...</div>);
  }
}
 
export default AlsoLike;