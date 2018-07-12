import React from 'react';
import axios from 'axios';
 
class ReadingBook extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
      book : {},
      currentUserChapter: 0
    }
    this.updateChapter = this.updateChapter.bind(this);
    this.getCurrentChapter = this.getCurrentChapter.bind(this);
    this.printChaptersEllipse = this.printChaptersEllipse.bind(this);
    this.checkCurrentChapter = this.checkCurrentChapter.bind(this);
    this.moveToChapter = this.moveToChapter.bind(this);
  }
 

  componentDidMount() {
     axios.get (`https://hanan-lior-publisher-app.herokuapp.com/book/GetBookById/${this.props.location.state.referrer.book_id}`, {
      })
      .then(response =>{
        this.setState({
            book:response.data
        });
      })
      .catch(err =>{
        console.log(err);
      });   
}


  updateChapter(){
    var current_chapter = this.checkCurrentChapter();
    axios.post (`https://hanan-lior-publisher-app.herokuapp.com/user/updateFinishChapter`, {
        chapter: current_chapter +1,
        bookId: this.state.book.book_id,
        _id: this.props.location.state.referrer.user.user._id
    })
}


  getCurrentChapter(){
      var current_chapter = this.checkCurrentChapter();
      return this.state.book.chapters ? this.state.book.chapters[this.state.currentUserChapter].content : <div>nothing to show</div>
  }

  printChaptersEllipse(){
    var items;
    var current_chapter = this.checkCurrentChapter();
    if(this.state.book.chapters){
      items = this.state.book.chapters;
      return (items.map((chapter,i)=>{
          if(i < current_chapter){     
              return(<article onClick={() => this.moveToChapter(i)} className="chapterEllipse finishedChapterEllipse"/>)
          }

          else if(i == 1){
              return(<article onClick={()=> {this.moveToChapter(i)} } className="chapterEllipse currentChapterEllipse">
                <b> {i} </b>
              </article>)
          }

          else{
              return(<article onClick={()=> {this.moveToChapter(i)} } className="chapterEllipse nextChapterEllipse">
                <b> {i}</b>
              </article>)
          }
      }))
    }
  }


  moveToChapter(i){
      this.setState({currentUserChapter:i});
  }

  checkCurrentChapter(){
      var books = this.props.location.state.referrer.user.user.borrowd_books;
      var current_chapter;
      books.forEach(book=>{
        if(book.book_id == this.props.location.state.referrer.book_id){
          current_chapter = book.current_chapter;
        }
      });
        return current_chapter;
  }  





  render () {
    const {book} = this.state;
    const {user} = this.props.location.state.referrer;
    return (
        <div id="book">
            <img className="bookImage" src={book.img}/>
            <article>
              <section>
                  <img src="/images/like.png"/>
                  <span>{book.likes ? book.likes.length : 0} </span>
              </section>
              <section>
                  <img src="/images/comment.png"/>
                  <span>{book.reviews ? book.reviews.length : 0}</span>
                </section>
              <section>
                  <img src="/images/share.png"/>
                  <span>{
                    book.shares ? book.shares.length : 0}</span>
              </section>
            </article>
            <h1>{book.book_name}</h1>
            <h2>by:  </h2><h3>{book.authorName}</h3>

            <div>
                {
                    this.state.book.categories ? this.state.book.categories.map(category=>{
                      return(<section className="ReadingbookCategory">
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
            <p id="chapterContent">
               {
                  this.getCurrentChapter()
               }      
            </p>
            <button id="finishChapter" onClick={this.updateChapter}>Finish Chapter</button>
            <div>
              <h4> chapters </h4>
              {
                this.printChaptersEllipse()
              }
       
            </div>
        </div>
    );
  }
 
}
 
export default ReadingBook;
