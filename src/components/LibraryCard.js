import React    from 'react';
import Header   from './Header';
import axios    from 'axios';
import DailyGoal from './libraryCardComponents/DailyGoals';
<<<<<<< HEAD
import GiveAnotherTryToBook from './libraryCardComponents/GiveAnotherTryToBook';
    
=======
import CurrentlyBorrowd from './libraryCardComponents/CurrentlyBorrowd';

>>>>>>> refs/remotes/origin/master

class LibraryCard extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
        isLoading: true,
        user: ''
    }   

  }
 
  componentWillMount(){
    axios.get('https://hanan-lior-publisher-app.herokuapp.com/user/userByID/5b2a86ece7179a58928586e4')
     .then(userData=>{
        this.setState({
            isLoading: false,
            user: userData.data});
     })
     .catch(err=>{console.log(err)})
  }

  

  render () {
    if(!this.state.user){
        return (<div>null</div>)
    }
    var userData = this.state.user.user;
  
    return (
     <div>
        <div id="mainWrapper">
          <Header title={'Library card'}/>
           <main>
                <div id="dailyGoal">
                    <p>reach<br></br> your daily</p>
                </div>
                {
                    userData.goals.map((goal)=>{
                        return(<DailyGoal description={goal.description} target={goal.target} current={goal.current} key={goal.description}> </DailyGoal>)
                    })
                }
                <div className="clear-both"></div>
                <div id="currntlyBorrowed">
                    <span>
                        currently bowrrowed
                    </span>
                    <span> 
                        2/2
                    </span>
                </div>

                {
                    userData.borrowd_books.map((book)=>{
                        return(<CurrentlyBorrowd bookId={book.book_id} current_chapter={book.current_chapter} key={book.book_id}> </CurrentlyBorrowd>)
                    })
                }



                <div className="clear-both">
                </div>
                <div id="expendBorrow">
                    <span>Expend borrow limit</span>
                    <button id="expendBorrowBtn"></button>
                </div>
                <div className="clear-both">
                </div>
             
                <GiveAnotherTryToBook/>

                <div id="recentlyFinish">
                    <p>recently finished</p>
                    <article>
                        <img src="images/theMartian.png"></img>
                        <section>
                            Reate This Book
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
                <div id="wishList">
                    <span>
                        WishList
                    </span>

                    <div>
                        <article>
                            <img src="images/jarHearts.png"></img>
                            <section>
                               <span>Less than <span>48</span> days</span>
                            </section>
                        </article>
                    </div>
                </div>
            </main>
        </div>
      </div>       
    );
  }
 
}
 
export default LibraryCard;