import React from 'react';

class WishList extends React.Component{
 
  constructor (props) {
    super(props);
  
  }
 
  
  render () {
    return (
        <div>
        <div id="wishListTitle">
            <span>
                WishList
            </span>
        </div>
        <div id="wishList">
            <article>
                <img src="images/jarHearts.png"></img>
                <section>
                   <span>Less than <span>48</span> days</span>
                </section>
            </article>
        </div>
        </div>
    );
  }
}
 
export default WishList;