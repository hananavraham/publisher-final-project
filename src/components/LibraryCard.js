import React    from 'react';
import Header   from './Header';
import axios    from 'axios';
import DailyGoal from './libraryCardComponents/DailyGoals';
import GiveAnotherTryToBook from './libraryCardComponents/GiveAnotherTryToBook';
    

class LibraryCard extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
        user: [],
        isLoading: false,
        error: null,
        }      
    }
 
  componentDidMount(){
    this.setState({isLoading:true})
    axios.get('https://hanan-lior-publisher-app.herokuapp.com/user/userByID/5b2a86ece7179a58928586e4')
    .then(userData=>{
        console.log(userData);
        this.setState({
            isLoading: false,
            user: userData.data});
     })
    .catch(error => this.setState({
        error,
        isLoading: false
     }));
  }

  

  render () {

    const { user, isLoading, error } = this.state;
    
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
                        2/2
                    </span>
                </div>
                <div id="mainBookChallengInfo">
                    <article className="bookChallengInfo">
                        <img src="/images/hazel-wood.png"/>
                        <section>
                            <span>
                                5 minutes to complete chapter
                            </span>
                        </section>    
                        <section>
                            <img src="images/clock.png"></img>
                            <span>2 hour</span>
                        </section>
                    </article>
                    <article className="bookChallengInfo">
                        <img src="images/red-book.png"></img>
                        <section>
                            <span>
                                begin new chapter
                            </span>
                        </section>    
                        <section>
                            <img src="images/clock.png"></img>
                            <span>5 days</span>
                        </section>
                    </article>
                </div>
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
    );
  }
 
}
 
export default LibraryCard;