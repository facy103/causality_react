import React, { Component } from 'react';
import './FirstSummary.css';
import Design from '../Design/Design.js';
// import ToggleTextInput from './ToggleTextInput.js';
import View from './View.js';
import Edit from './Edit.js';
import questions from '../../DB/perfectDB.js';
 



class EditView extends Component {

    constructor(props){
        super(props);
        this.state={
        editMode: false,
        txt: this.props.botMessege
        }
        this.toggleButton = this.toggleButton.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        }

    toggleButton(value){
        this.setState(
            (currentState) => ({editMode: !currentState.editMode}));
        }

    inputChangeHandler=(event)=> {
     
        this.setState({txt:event.target.value}); // after editing shows edited text
        questions[this.props.path][this.props.answerRef].answer = event.target.value;
    
        if(event.keyCode == 13 && event.shiftKey == false) { // if enter pressed
            event.preventDefault();
              this.toggleButton();
            }
    }
        
    render (){
       
    return (    
         
            <div className='editView'>
                { this.state.editMode ? 
                <Edit 
                    clicked={this.toggleButton}
                    botMessege={this.state.txt}
                    changed={(event) => this.inputChangeHandler(event)}
                />:
                <View
                    botMessege={this.state.txt}
                    clicked={this.toggleButton}
                    questionCount={this.props.questionCount} 
                    path={this.props.path}
                />}
                </div>
    )
    }
}

export default EditView;