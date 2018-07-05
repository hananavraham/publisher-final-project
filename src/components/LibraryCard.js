import React    from 'react';
import Header   from './Header';
import axios    from 'axios';
import DailyGoal from './libraryCardComponents/DailyGoals';

class LibraryCard extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
        isLoading: true,
        user: ''
    }   

  }
 
  componentWillMount(){
    axios.get('https://hanan-lior-publisher-app.herokuapp.com/user/userByID/5b29fb01817b593f14eac973')
     .then(userData=>{
        this.setState({
            isLoading: false,
            user: userData.data});
     })
     .catch(err=>{console.log(err)})
  }

  

  render () {
    console.log(this.state);
    console.log(this.state.user);
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
                        console.log(goal);
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
                <div id="bookAnotherTray">
                    <p>give these books another try!</p>
                    <article>
                        <img src="images/whanBook.png"></img>
                        <section>
                            "this book having perfect timing for e in everything in your life"
                        </section>
                        <button>start again</button>
                    </article>
                </div>
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