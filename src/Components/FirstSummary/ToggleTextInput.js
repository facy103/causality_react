import React, { Component } from 'react';
import './FirstSummary.css';
import Design from '../Design/Design.js';
import View from './View.js';
import Edit from './Edit.js';
import questions from '../../DB/perfectDB.js';



class ToggleTextInput extends Component {
    goToEditMode = () => {
        this.props.ToggleDisplay
    }

    display=()=> {
    switch (this.props.ToggleDisplay) {
        case 'output':
             return (
                 <div>
                    <Design 
                    key={this.props.key}
                    path={this.props.path} 
                    questionCount={this.props.questionCount} 
                    botMessege={this.props.botMessege}/>
                    <button 
                    key={this.props.key}
                    className ='FirstSummeryButton' 
                    onClick={this.goToEditMode}>{this.props.buttons[0]}</button>
                </div>
             )
            break;
        case 'input':
             return (
                <div>
                    <div>
                    <textarea key={this.props.key} autoFocus rows="1"autoComplete="off" className="SummayInput" onKeyDown={this.props.txtSubmit}/>
                    </div>
                    <div>
                    <button key={this.props.key} className ='FirstSummeryButton' onClick={this.goToEditMode}>אשר</button>
                        </div>
                
                   
                </div>
                 )
            break;
        default:
            break;
    }
}
    render (){
    return (
            <div>
                {this.display()}
            </div>
    )
    }
}

export default ToggleTextInput;