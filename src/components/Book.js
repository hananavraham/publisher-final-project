import React from 'react';
import axios from 'axios';

 
class Book extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
      book : {},
      summary : null
    }

  }


  componentDidMount() {
     axios.get (`https://hanan-lior-publisher-app.herokuapp.com/book/GetBookById/5b2b323e3fae2300142ba375`, {
      })
      .then(response =>{
        console.log(response.data);
        console.log(response.data.chapters[0].content)
        this.setState({
            book:response.data,
            summary:response.data.chapters[0].content
            });
      })
      .catch(err =>{
        console.log(err);
      });   
}


  render () {
    return (
        <div id="book">
            <img className="bookImage" src="/images/ronaldo.jpg"/>
            <article>
              <section>
                  <img src="/images/like.png"/>
                  <span>25 </span>
              </section>
              <section>
                  <img src="/images/comment.png"/>
                  <span>27</span>
                </section>
              <section>
                  <img src="/images/share.png"/>
                  <span>10</span>
              </section>
            </article>
            <h1>{this.state.book.book_name}</h1>
            <h2>by:  </h2><h3>{this.state.book.authorName} </h3>
            <h4> Summary </h4>
            <p>
              {this.state.summary}
            </p>
            <section className="bookCategory">
              <h5>#{this.state.book.categories}</h5>
            </section>
            <section id="writerProgress">
              <h3> writer progress </h3>
              <article> 
                <span> </span>
              </article>
            </section>
            <section id="bookChoice">
                <article>
                  <img src="/images/eye.png"/>
                  borrow
                </article>
                <span>
                  <article>
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
