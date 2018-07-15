import React from 'react';
import axios from 'axios';
import Message from './Message'
 
class Messages extends React.Component{
 
  constructor (props) {
    super(props);
    this.state = {
      messages : [],
      isInbox : true,
      message:'',
      toUser:'',
      reciverID:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showForm = this.showForm.bind(this);
    this.handleToUserChange = this.handleToUserChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.displayInbox = this.displayInbox.bind(this);
    this.displaySentBox = this.displaySentBox.bind(this);
  }
 
  componentDidMount() {
    document.getElementById('headerTitle').innerHTML = 'Messages';
    const userId = localStorage.getItem('realId');
    console.log('messages ' + userId)
     axios.get (`https://hanan-lior-publisher-app.herokuapp.com/user/getUserMessages/${userId}`, {
      })
      .then(response =>{
        console.log(response.data[0]);
        this.setState({
            messages:response.data[0]
        });
      })
      .catch(err =>{
        console.log(err);
      });   
}


  displayInbox(){
      this.setState({isInbox:true});
  }


  displaySentBox(){
    this.setState({isInbox:false});
  }

  handleMessageChange(event){
      this.setState({message:event.target.value})
  }

  handleToUserChange(event){
      this.setState({toUser:event.target.value});
      var use= this.state.toUser;
      axios.get(`https://hanan-lior-publisher-app.herokuapp.com/user/getUserByName/${event.target.value}`,{
         })
      .then(response =>{
        this.setState({reciverID:response.data[0]._id});
      })
      .catch(err =>{
        console.log(err);
      });
  }

  /* this method find the user Id by the name insert ToUser input */
  handleSubmit(event){
      console.log(this.state.reciverID);
      const userId = localStorage.getItem('realId');
      axios.post(`https://hanan-lior-publisher-app.herokuapp.com/user/sendMessage`,{
        _id: userId,
        reciverID: this.state.reciverID,
        message: this.state.message,
        date:Date.now()
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

     if(this.state.messages.length == 0){
       return <h1>need to login</h1>;
    }
    return (
        <div>
	        <section className="messageHeader">
          <label onClick={this.displayInbox}> INBOX </label>
	            <span onClick={this.displaySentBox}> SENT </span>
	        </section>
          <form id="newMessage" onSubmit={this.handleSubmit}>
          <label>To: </label><span>
            <input name="toUser" value={this.state.toUser} onChange={this.handleToUserChange} placeholder="Enter Name"/></span><br/>
            <textArea name="message" value={this.state.message} onChange={this.handleMessageChange}>
            </textArea>
            <button type="submit">Send Message </button>
          </form>
          {   /* mapping all the messages */
            this.state.isInbox ? this.state.messages.Inbox.map((message)=>{
              return(<Message SenderId={message.SenderId} date={message.date} message={message.message} key={message.message + 'i'}/>)
            }) : this.state.messages.Sent.map((message)=>{
              return(<Message SenderId={message.reciverID} date={message.date} message={message.message} key={message.message + 'i'}/>)
            })
            
          }
         
          <button id="AddMessageBtn" onClick={this.showForm}/>
        </div>
    );
  }
 
}
 
export default Messages;