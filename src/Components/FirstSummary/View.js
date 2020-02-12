import React, { Component } from 'react';
import './FirstSummary.css';
import Design from '../Design/Design.js';
import questions from '../../DB/perfectDB.js';

class View extends Component {
    render (){
        // console.log(this.props.botMessege);
    return (
            <div>
                   <Design
                   botMessege={this.props.botMessege}
                   />
                  
                    <button 
                    className ='FirstSummeryButton'
                    onClick={this.props.clicked}
                    >עריכה</button>
            </div>
    )
    }
}

export default View;