import React, { Component } from 'react';
import './FirstSummary.css';
import Design from '../Design/Design.js';
import questions from '../../DB/perfectDB.js';



class Edit extends Component {

    render (){
    return (
     <div>
      
       <input autoFocus rows="1"autoComplete="off" defaultValue={this.props.botMessege} className="SummaryInput" onKeyDown={this.props.changed}/>
     
        <br />

      <button className ='FirstSummeryButton' onClick={this.props.clicked}>אשר</button>

    
     </div>
    )
    }
}

export default Edit;