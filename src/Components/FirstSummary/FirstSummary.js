import React, { Component, useState } from 'react';
import './FirstSummary.css';
import Design from '../Design/Design.js';
import EditView from './EditView.js';
import questions from '../../DB/perfectDB.js';
import {textFilter, applyCss, buildSyntax, textTransform} from '../../mytools.js';

const titleStyle = {
    "color":"#767E8F",
    "fontSize":"25px"
}

const FirstSummary=(props)=> {

    const [alreadyAnswered, setAnswerState] = useState(false);
    return (
        <div className="totalContainer">


            <div className="firstSummaryContainer">
                <div>
                 <p style={titleStyle}>המציאות</p>
                <EditView 
                botMessege={
                        textTransform(props.path,props.questionCount,props.botMessege[0])}
                answer={questions[props.path][props.questionCount-2].answer}
                answerRef= {props.questionCount-2}
                path={props.path}
                questionCount={props.questionCount}
              
                />

                </div>

                <span className='divider'></span>
                
                <div>
                 <p style={titleStyle}>הרצון</p>
                <EditView 
                botMessege={textTransform(props.path,props.questionCount,props.botMessege[1])}
                answer={questions[props.path][props.questionCount-1].answer}
                answerRef= {props.questionCount-1}
                path={props.path}
                questionCount={props.questionCount}
        
                />
                </div>
               
                        </div>
                        {alreadyAnswered ?
                    <button className="started">התחלת חקירה</button> :
                 <button onClick={ ()=> { props.SetNextStep('a')
                                        setAnswerState(true);
                                 
                                    }}
                            className="start">התחלת חקירה</button>
                        }
            </div>
    )
 
}

export default FirstSummary;