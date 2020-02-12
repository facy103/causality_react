import React from 'react';
import './Horizontal.css';
import questions from '../../DB/perfectDB.js';
import Design from '../Design/Design.js';
import {textFilter, applyCss, buildSyntax, textTransform} from '../../mytools.js';


const Horizontal = (props) => {
    return (
        <div className='lineContainer'>
       <div className='botMsg'>
            <Design botMessege={textTransform(props.path, props.questionCount, props.botMessege, true)} />
        </div>
        <textarea autoFocus rows="1" placeholder="פירוט התשובה..." autoComplete="off" className="horizontalResponse" onKeyDown={props.txtSubmit}/>

        </div>
 
    )
}

export default Horizontal;