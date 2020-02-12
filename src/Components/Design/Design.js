import React, { Component } from 'react';
import questions from '../../DB/perfectDB.js';
import { Markup } from 'interweave';




class Design extends Component { 

constructor(props) {
    super(props);
    this.subKey='' ;
    this.value='' ;
    this.keyIndex='' ;
    this.masterKey='' ;
    this.key='' ;
    this.value='' ;
}

 applyCss=(path, questionCount, txt)=> {
    if ( "css" in questions [ path ][ questionCount ] )
      {
        for ( this.masterKey in questions [ path ][ questionCount ].css ) 
        {
          this.subKey = Object.keys(questions [ path ][ questionCount ][ "css" ][ this.masterKey] )[0] ;
          for (this.keyIndex in questions [ path ][ questionCount ][ "css" ][ this.masterKey][this.subKey])
          {
            this.key = Object.keys(questions [ path ][ questionCount ][ "css" ][ this.masterKey][this.subKey][this.keyIndex])[0];
            this.value = questions [ path ][ questionCount ][ "css" ][ this.masterKey][this.subKey][this.keyIndex][this.key];
            txt = txt.replace(this.key, (`<span style="${this.subKey}:${this.value}">${this.key}</span>`)) ;
          }
        }
    }
    txt = txt.replace(/__/g,'<br>');
    return txt;
}

    render () {
    
        return (
            <div>
                <Markup content={this.props.botMessege} />
            </div>
            
    
            
    )
            }
}

export default Design;