import React from 'react';
import axios from 'axios';
 
class Message extends React.Component{
 
  constructor (props) {
    super(props);

    this.state = {
      user: {}
    }

  }
 

componentDidMount() 
{
    const userId = localStorage.getItem('realId');
    console.log(userId);
    this.setState({isLoading:true})
    axios.get(`https://hanan-lior-publisher-app.herokuapp.com/user/userByID/${userId}`)
    .then(userData=>{
      this.setState({
          user: userData.data.user
      });
    }) 
}



  render () {
   
    return (
        <section id="Messagebox">
            <img src={this.state.user.image}></img>
            <article>
                <section>
                    {this.props.message.substring(0,20)}
                </section>
                <span> <date>{this.props.date.substring(0,10)}</date> </span><br/>
                <section className="person">
                    @{this.state.user.name}
                </section>
            </article>
        </section>
    );
  }
 
}
 
export default Message;
