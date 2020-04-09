import React, { Component } from "react";
//import { Link } from "react-router-dom";

import MessageForm from './MessageForm/MessageForm';
import MessagesList from './MessagesList/MessagesList';

import './MessageForm/MessageForm.css'
export default class MessageDashboard extends Component {

    state = {
        messages: [
            {name: "Hi Ahmed"},
            {name: "Hi Aya !!"},
            {name: "Hi Eslam!"}
        ],
        current: ''
    }

    //Update message
    updateMessage = (ev) => {
        this.setState({
            current: ev.target.value
        })
    }

    //Add message
    addMessage = (ev) => {
        ev.preventDefault();
        let curr = this.state.current
        let messages = this.state.messages

        curr !== '' ? messages.push({name:curr}): alert('Please Add New Message')
        this.setState({
            messages,
            current: ''
        })        
    }

    //Delete Message
    deleteMessage = (index) => {
        let messages = this.state.messages
        messages.splice(index, 1)
        this.setState({messages}) 
    }

    //Edit Message
    editMessage = (index, newValue) => {
        let messages = this.state.messages
        let message = messages[index]
        message['name'] = newValue
        this.setState({messages})
    }


    render() {
        //const messages = this.state.messages;
        const {messages} = this.state;

        const messagelist = messages.map(( message, index) => {
            return <MessagesList messageData={message} key={index} idx={index} deleteMessage={this.deleteMessage} editMessage={this.editMessage} />
        })
        
        return (
                <section className="textCenter">
                    <h2 className="textCenter">Simple Chat App</h2>
                    <h3 ><mark>Be close to your friends and Send Messages</mark></h3>           
                    <MessageForm currentValue={this.state.current} updateMessage={this.updateMessage} addMessage={this.addMessage}  />
                    { this.state.messages.length  > 0 ? <ul >{messagelist}</ul> : <p>There is no message to show</p> }
                </section>
            
        );
    }
} 