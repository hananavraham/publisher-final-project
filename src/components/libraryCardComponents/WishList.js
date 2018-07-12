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
                <img src=""></img>
                <section>
                   <span></span>
                </section>
            </article>
        </div>
        </div>
    );
  }
}
 
export default WishList;