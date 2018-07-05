import React from 'react';

class GiveAnotherTryToBook extends React.Component{
 
  constructor (props) {
    super(props);
  
  }
 
  
  render () {
    return (
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
    );
  
 
  }
 
}
 
export default GiveAnotherTryToBook;