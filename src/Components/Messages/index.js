import React from 'react';
import './styles.css';

import Message from '../Message';
import { useSelector } from 'react-redux';

export default function Messages(){

    const {messages} = useSelector(state => state.layout)

    return(
        <div className="messages"> 
             {messages.map ((mg,index) => <Message key={index} message={mg} />)}
        </div>
    );
}