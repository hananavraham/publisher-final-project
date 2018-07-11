import React from 'react';
import axios from 'axios';
import Message from './Message'
 
class Messages extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
      messages : [],
      isInbox : true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showForm = this.showForm.bind(this);
  }
 
  componentDidMount() {
     axios.get (`https://hanan-lior-publisher-app.herokuapp.com/user/getUserMessages/5b29fb01817b593f14eac973`, {
      })
      .then(response =>{
        console.log(response.data[0]);
        this.setState({
            messages:response.data[0].Inbox
            });
      })
      .catch(err =>{
        console.log(err);
      });   
}


  handleSubmit(event){
      axios.post(`https://hanan-lior-publisher-app.herokuapp.com/user/sendMessage`,{
        _id: '5b29fb01817b593f14eac973',
        ToUserId: event.target.toUser.value,
        message: event.target.toUser.message.value
      })
      .then(function (response) {
          console.log(response);
        })
      .catch(function (error) {
          console.log(error);
        });
  }

  showForm(){
    var element = document.getElementById('newMessage');
    element.style.display = 'block';
  }


  render () {
    return (
        <div>
	        <section className="messageHeader">
	            INBOX 
	            <span>SENT </span>
	        </section>
          <form id="newMessage" onSubmit={this.handleSubmit}>
          <label>To: </label><span>
            <input name="toUser" placeholder="Enter Name"/></span><br/>
            <textArea name="message">
            </textArea>
            <button type="submit">Send Message </button>
          </form>
          {   /* mapping all the messages */
            this.state.messages.map((message)=>{
              return(<Message SenderId={message.SenderId} date={message.date} message={message.message} key={message.message + 'i'}/>)
            })
          }
         
          <button id="AddMessageBtn" onClick={this.showForm}/>
        </div>
    );
  }
 
}
 
export default Messages;