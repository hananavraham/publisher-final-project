import React from 'react';
import axios from 'axios';
 
class ReadingBook extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
      book : {},
      userId : null,
      chpater : null
    }
    this.updateChapter = this.updateChapter.bind(this);
  }
 

  componentDidMount() {
     axios.get (`https://hanan-lior-publisher-app.herokuapp.com/book/GetBookById/${this.props.location.state.referrer}`, {
      })
      .then(response =>{
        console.log(response.data);
        console.log(response.data.chapters[0].content)
        this.setState({
            book:response.data,
            chapter:response.data.chapters[response.data.chapters.length -1].content
            });
      })
      .catch(err =>{
        console.log(err);
      });   
}




  updateChapter(){
    axios.post (`https://book-payments.herokuapp.com/user/updateFinishChapter`, {
        _id: this.state.userId,
        bookId : this.state.book._id,
        chapter: this.state.chapter
      })
     .then(bookData=>{
        this.setState({
            isLoading: false,
            book: bookData.data,
        });
  })
}

  render () {
    return (
        <div id="book">
            <img className="bookImage" src={this.state.book.img}/>
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
            <h2>by:  </h2><h3>{this.state.book.authorName}</h3>
            <section className="bookCategory">
                <h5>#{this.state.book.categories}</h5>
            </section>
            <section id="writerProgress">
              <h3> writer progress </h3>
              <article> 
                <span> </span>
              </article>
            </section>
            <p id="chapterContent">
               {this.state.book.chapters ? this.state.book.chapters[0].content : <div>sdfs</div>}
            </p>
            <button id="finishChapter" onclick="updateChapter">Finish Chapter</button>
            <div>
              <h4> chapters </h4>
              <article className="chapterEllipse finishedChapterEllipse"/>
              <article className="chapterEllipse currentChapterEllipse">
                <b> 3 </b>
              </article>
              <article className="chapterEllipse nextChapterEllipse">
                <b> 4 </b>
              </article>
            </div>
        </div>
    );
  }
 
}
 
export default ReadingBook;
