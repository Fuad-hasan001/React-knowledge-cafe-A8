import React, { useEffect, useState } from 'react';
import './QuesAns.css'

const QuesAns = (props) => {
    
    const {question, answer} = props.QA

    
    return (
        <div className='QuesAns'>
           
                <h3>Q/- {question}</h3>
                <p>Ans: {answer}</p>
            
            
        </div>
    );
};

export default QuesAns;