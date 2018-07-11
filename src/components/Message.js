import React from 'react';
 
class Message extends React.Component{
 
  constructor (props) {
    super(props);

  }
 
  render () {
    return (
        <section id="Messagebox">
            <img src={this.props.user.img}></img>
            <article>
                <section>
                    {this.props.message}
                </section>
                <span> {this.props.date} </span><br/>
                <section className="person">
                    @{this.props.person}
                </section>
            </article>
        </section>
    );
  }
 
}
 
export default Message;
