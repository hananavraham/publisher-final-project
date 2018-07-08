import React from 'react';
import Message from './Message'
 
class Messages extends React.Component{
 
  constructor (props) {
    super(props);

  }
 


  render () {
    return (
        <div>
	        <section className="messageHeader">
	            INBOX 
	            <span>SENT </span>
	        </section>
        	<Message/>
          <Message/>
          <Message/>
          <button id="AddMessageBtn"/>
        </div>
    );
  }
 
}
 
export default Messages;