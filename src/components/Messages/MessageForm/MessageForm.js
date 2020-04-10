import React from 'react';
import './MessageForm.css'

const MessageForm = (props) => {
    return (
        <form onSubmit={props.addMessage}>
            <input className="messageInput" placeholder="Enter your new message" type="text" value={props.currentValue} onChange={props.updateMessage} />
            <button className="messageButton" type="submit">Add New Message</button>
        </form>
    )
}


export default MessageForm;