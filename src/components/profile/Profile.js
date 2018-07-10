import React from 'react';
 
class Profile extends React.Component{
 
  constructor (props) {
    super(props);

  }
 


  render () {
    return (
    	<div>
    	  <div id="mainProfile">
    
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