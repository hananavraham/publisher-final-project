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
    document.getElementById('headerTitle').innerHTML = 'Profile';
    const userId = localStorage.getItem('myId');
    this.setState({isLoading:true})
    axios.get(`https://hanan-lior-publisher-app.herokuapp.com/user/userByGoogleID/${userId}`)
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
                                    <td>{user.user.currently_writing.length}</td>
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
                  <div id="continueWriting">
                    <span>
                        continue writing
                    </span>
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
                         return(<CurrentlyBorrowed key={book.book_id} book_id={book.book_id} profile={'profile'} user={this.state.user}></CurrentlyBorrowed>)
                    }) : <div></div>
                }
                 <div id="beginNewBook">
                    <span>Begin New Book</span>
                    <button id="beginNewBookBtn"></button>
                </div>
            </div>


    		);
    }
    return (
    	<div>
            <h1>need to login</h1>;
    	</div> );
  }
 
}
 
export default Profile;