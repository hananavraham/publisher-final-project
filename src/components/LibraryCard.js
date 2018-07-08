import React                from 'react';
import Header               from './Header';
import axios                from 'axios';
import AlsoLike             from './libraryCardComponents/AlsoLike';
import WishList             from './libraryCardComponents/WishList';
import DailyGoal            from './libraryCardComponents/DailyGoals';
import RecentlyFinished     from './libraryCardComponents/RecentlyFinished';
import CurrentlyBorrowed    from './libraryCardComponents/CurrentlyBorrowed';
import GiveAnotherTryToBook from './libraryCardComponents/GiveAnotherTryToBook';
    

class LibraryCard extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
        user: [],
        unlikedBook:[],
        isLoading: false,
        error: null
        }      
    }
 
  componentDidMount(){
    this.setState({isLoading:true})
    axios.get('https://hanan-lior-publisher-app.herokuapp.com/user/userByID/5b2a86ece7179a58928586e4')
    .then(userData=>{
        console.log(userData);
        this.setState({
            isLoading: false,
            user: userData.data,
            unlikedBook:userData.data.user.unliked_books
            });
     })
    .catch(error => this.setState({
        error,
        isLoading: false
     }));
  }

  

  render () {

    const { user, unlikedBook, isLoading, error } = this.state;
    
    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    return (
     <div>
           <main>
                <div id="dailyGoal">
                    <p>reach<br></br> your daily</p>
                </div>
                {
                    !isLoading && user.user ? user.user.goals.map((goal)=>{
                         return(<DailyGoal description={goal.description} target={goal.target} current={goal.current} key={goal.description + 'i'}> </DailyGoal>)
                    }) : <div>no goals</div>
                }
                <div className="clear-both"></div>
                <div id="currntlyBorrowed">
                    <span>
                        currently bowrrowed
                    </span>
                    <span> 
                        {!isLoading && user.user ? user.user.borrowd_books.length : 0} 
                    </span>
                </div>
                {
                    !isLoading && user.user ? user.user.borrowd_books.map((book)=>{
                         return(<CurrentlyBorrowed key={book.book_id} book_id={book.book_id}></CurrentlyBorrowed>)
                    }) : <div>no goals</div>
                }
                <div className="clear-both">
                </div>
                <div id="expendBorrow">
                    <span>Expend borrow limit</span>
                    <button id="expendBorrowBtn"></button>
                </div>
                <div className="clear-both">
                </div>
                {
                    !isLoading && unlikedBook.length > 0 ? <GiveAnotherTryToBook unlikedBook={unlikedBook[0]}></GiveAnotherTryToBook> : <div>no unlike book</div>
                }
                <RecentlyFinished/>
                <WishList/>
                <AlsoLike/>
            </main>
  
      </div>       
    );
  }
 
}
 
export default LibraryCard;