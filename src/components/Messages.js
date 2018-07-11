import React from 'react';
import axios from 'axios';
import Message from './Message'
 
class Messages extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
      messages : []
    }

  }
 
  componentDidMount() {
     axios.get (`https://hanan-lior-publisher-app.herokuapp.com/user/getUserMessages/5b29fb01817b593f14eac973`, {
      })
      .then(response =>{
        console.log(response.data[0]);
        this.setState({
            messages:response.data[0].Inbox,
            });
      })
      .catch(err =>{
        console.log(err);
      });   
}



  render () {
    return (
        <div>
	        <section className="messageHeader">
	            INBOX 
	            <span>SENT </span>
	        </section>
          {
            this.state.messages.map((message)=>{
              return(<Message user= '5b29fb01817b593f14eac973' person={message.SenderId} date={message.date} message={message.message} key={message.message + 'i'}/>)
            })
          }
         
          <button id="AddMessageBtn"/>
        </div>
    );
  }
 
}
 
export default Messages;