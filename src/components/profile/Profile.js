import React 			 from 'react';
import axios 			 from 'axios'; 
import ContinueWriting 	 from './ContinueWriting';
import CurrentlyBorrowed from '../libraryCardComponents/CurrentlyBorrowed';

class Profile extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
        user: '',
        isLoading: false,
        error: null
        } 


  }
 
    componentDidMount(){
    this.setState({isLoading:true})
    axios.get('https://hanan-lior-publisher-app.herokuapp.com/user/userByID/5b44b395e7179a31f532223a')
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

  	const { user, isLoading, error } = this.state;
    
  /* for user*/

    if(user.user && !this.state.isLoading){
	
    	return (
    		<div>
    		<div id="mainProfile" >
    
                    <section>

                    </section>
                    <img src={user.user.image}></img>
                    <section>
                        <div>
                            <table>
                            <tbody>
                                <tr>
                                    <td>{user.user.borrowd_books.length}</td>
                                    <td>{user.user.followers.length}</td> 
                                    <td>{user.user.following.length}</td>
                                </tr>
                                <tr>
                                    <td>books</td>
                                    <td>followers</td>
                                    <td>following</td>
                                </tr>
                                 </tbody>
                            </table>
                        </div>
                        <div>
                            <span>@{user.user.name}</span>
                        </div>
                        <div>
                            <p>{user.user.status}</p>
                        </div>
                    </section>
                    <section>

                    </section>
                </div>
                {
                    !isLoading && user.user ? user.user.currently_writing.map((book)=>{
                         return(<ContinueWriting key={book+'i'} book_id={book}></ContinueWriting>)
                    }) : <div>no goals</div>
                }
                <div id="profileCurrntlyReading">
                    <span>
                        currently reading
                    </span>
                    <span> 
                     {user.user.borrowd_books.length}
                    </span>
                </div>
              	{
                    !isLoading && user.user ? user.user.borrowd_books.map((book)=>{
                         return(<CurrentlyBorrowed key={book.book_id} book_id={book.book_id} profile={'profile'}></CurrentlyBorrowed>)
                    }) : <div></div>
                }
                </div>
    		);
    }
    return (
    	<div>
    	  <div id="mainProfile">
    
                    <section>

                    </section>
                    <img src="images/profilePic.png"></img>
                    <section>
                        <div>
                            <table>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>187</td> 
                                    <td>247</td>
                                </tr>
                                <tr>
                                    <td>books</td>
                                    <td>followers</td>
                                    <td>following</td>
                                </tr>
                                 </tbody>
                            </table>
                        </div>
                        <div>
                            <span>@ofir_d</span>
                        </div>
                        <div>
                            <p>Hi! my name is Ofir and I love to write, hope you will enjoy! send me a message to ask whatever you like :)</p>
                        </div>
                    </section>
                    <section>

                    </section>
                </div>
          
         	
                <div id="continueWriting">
                    <span>
                        continue writing
                    </span>
                </div>
                <div id="continueWritingBook">
                    <article>
                        <img src="images/whanBook.png"></img>
                        <section>
                            The Ring and the crown
                        </section>
                        <table>
                        <tbody>
                            <tr>
                                <td>18</td>
                                <td>87</td> 
                            </tr>
                            <tr>
                                <td>Chapter</td>
                                <td>followers</td>
                            </tr>
                            </tbody>
                        </table>
                        <button>EDITING mode</button>
                    </article>
                    <section>
                        <p>! Last Chapter wrote 12 Days Ago</p>
                    </section>
                </div>
          	       <div id="beginNewBook">
                    <span>Begin New Book</span>
                    <button id="beginNewBookBtn"></button>
                </div>
             
            

                <div id="profileDailyGoalSiblings">
                    <p>Write 5 days in a row<span>3/10</span></p>
                    <p>win 200 xp</p>
                    <div className="progressBar">
                        <span></span>
                    </div>
                </div>

                <div id="profileCurrntlyReading">
                    <span>
                        currently reading
                    </span>
                    <span> 
                     dddd
                    </span>
                </div>
                <div id="mainBookChallengInfo">
                    <article className="bookChallengInfo">
                        <img src="images/hazel-wood.png"></img>
                        <section>
                            <span>dgdasasdasdas
                             
                            </span>
                        </section>    
                    </article>
                    
                </div>
                </div>
    );
  }
 
}
 
export default Profile;