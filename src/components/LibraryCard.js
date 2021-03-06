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
        recently_finished:[],
        isLoading: false,
        error: null
        }      
    }
 
  componentDidMount(){
    document.getElementById('headerTitle').innerHTML = 'Library Card';
    const userId = localStorage.getItem('googleId');
    this.setState({isLoading:true})
    axios.get(`https://hanan-lior-publisher-app.herokuapp.com/user/userByGoogleID/${userId}`)
    .then(userData=>{
        console.log(userData);
        localStorage.setItem('realId', userData.data.user._id);
        this.setState({
            isLoading: false,
            user: userData.data,
            unlikedBook:userData.data.user.unliked_books,
            recently_finished:userData.data.user.recently_finished
            });
     })
    .catch(error => this.setState({
        error,
        isLoading: false
     }));
  }

  

  render () {

    const { user, unlikedBook, recently_finished, isLoading, error } = this.state;
    
    if (error) {
        return <h1>{error}</h1>;
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
                         return(<CurrentlyBorrowed user={this.state.user} key={book.book_id} book_id={book.book_id}></CurrentlyBorrowed>)

                    }) : <div></div>
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
                    !isLoading && unlikedBook.length > 0 ? <GiveAnotherTryToBook userId={user.user._id} unlikedBook={unlikedBook[Math.floor(Math.random() * unlikedBook.length)]}></GiveAnotherTryToBook> : <div></div>
                }

                {
                    !isLoading && recently_finished.length > 0 ? <RecentlyFinished userId={user.user._id} recently_finished={recently_finished[Math.floor(Math.random() * recently_finished.length)]}></RecentlyFinished> : <div></div>
                }
            
                 <div id="wishListTitle">
                    <span>
                        WishList
                    </span>
                </div>
                {
                    !isLoading && user.user ? user.user.wishlist.map((book)=>{

                         return(<WishList user={this.state.user} key={book.book_id + 'i'} book_id={book.book_id}></WishList>)
                    }) : <div></div>
                }
                <div id="alsoLikeTitle">
                     <span>you may also like</span>
                </div>
                <div id="alsoLikeImgContainer">
                {
                    !isLoading && user.user ?   <AlsoLike user={this.state.user} offerdBooks={user.offerdBooks}/> :  <AlsoLike/>
                }
                </div>

               
            </main>
  
      </div>       
    );
  }
 
}
 
export default LibraryCard;