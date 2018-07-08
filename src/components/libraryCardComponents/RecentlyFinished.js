import React from 'react';

class RecentlyFinished extends React.Component{
 
  constructor (props) {
    super(props);
  
  }
 
  
  render () {
    return (
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
    );
  }
}
 
export default RecentlyFinished;