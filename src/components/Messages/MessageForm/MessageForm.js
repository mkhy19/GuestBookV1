import React from 'react';
import './MessageForm'

const MessageForm = (props) => {
    return (
        <form onSubmit={props.addMessage}>
            <input className="messageInput" type="text" value={props.currentValue} onChange={props.updateMessage} />
            <button className="messageButton" type="submit">Add Message</button>
        </form>
    )
}


export default MessageForm;