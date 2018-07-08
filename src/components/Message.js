import React from 'react';
 
class Message extends React.Component{
 
  constructor (props) {
    super(props);

  }
 
  render () {
    return (
        <section id="Messagebox">
            <img src="/images/person1.png"></img>
            <article>
                <section>
                    Hi, i have question
                </section>
                <span> 27/12/17 </span><br/>
                <section className="person">
                    @enneOe
                </section>
            </article>
        </section>
    );
  }
 
}
 
export default Message;
