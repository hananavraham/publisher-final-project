import React from 'react';
 
class ReadingBook extends React.Component{
 
  constructor (props) {
    super(props);

  }
 
  render () {
    return (
        <div id="book">
            <img className="bookImage" src="/images/hazel-wood.png"/>
            <article>
              <section>
                  <img src="/images/like.png"/>
                  <span>25 </span>
              </section>
              <section>
                  <img src="/images/comment.png"/>
                  <span>27</span>
                </section>
              <section>
                  <img src="/images/share.png"/>
                  <span>10</span>
              </section>
            </article>
            <h1>The hazel Wood</h1>
            <h2>by:  </h2><h3>Ruth Man </h3>
            <h4> Summary </h4>
            <p>
              theh pf;lsdfkj , and we make it possible,
              for what we see its only for the mantion!!!
              please, check it for few days and let me know the results.
              waiting to see you as soon as possible.
            </p>
            <section className="bookCategory">
              <h5>#drama</h5>
            </section>
            <section id="writerProgress">
              <h3> writer progress </h3>
              <article> 
                <span> </span>
              </article>
            </section>
            <section id="bookChoice">
                <article>
                  <img src="/images/eye.png"/>
                  preview
                </article>
                <span>
                  <article>
                    <img src="/images/star.png"/>
                      wishlist
                  </article>
                </span>
            </section>
        </div>
    );
  }
 
}
 
export default ReadingBook;
