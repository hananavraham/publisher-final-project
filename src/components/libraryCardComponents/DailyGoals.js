import React from 'react';

class DailyGoal extends React.Component{
 
  constructor (props) {
    super(props);
  
  }
 
  
  render () {
    return (
        <div className="dailyGoalSiblings">
            <p> {this.props.description}<span>{this.props.current}/{this.props.target}</span></p>

            <p>win 10 xp</p>
            <div className="progressBar">
                <span></span>
            </div>
        </div>
    );
  
 
  }
 
}
 
export default DailyGoal;