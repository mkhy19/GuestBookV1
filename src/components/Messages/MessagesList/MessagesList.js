import React , {Component, Fragment} from 'react';
import './MessagesList.css'

class MessagesList extends Component{
    state = {
        isEdit: false,
        isReply: false
    }

    //Render message 
    renderMessagesList = () => {
        return (
            <ul class="list-inline">
                <li>
                    <span>{this.props.messageData.name}</span><br/>
                    <button className="editButton" onClick={() => {this.toggelEdit()}}>Edit</button>
                    <button className="deleteButton" onClick={() => {this.props.deleteMessage(this.props.idx)}}>Delete</button>
                </li>
            </ul>
        )
    }

    //Toggle Edit
    toggelEdit = () => {
        let {isEdit} = this.state
        this.setState({
            isEdit: !isEdit,
        })
    }
    
    //Update Message item
    updateMessageItem = (ev) => {
        ev.preventDefault()
        this.props.editMessage(this.props.idx, this.input.value)
        this.toggelEdit()
    }

    //Render edit form
    renderEditForm = () => {
        return (
            <form onSubmit={this.updateMessageItem}>
                <textarea type="text" ref={(v)=>{this.input = v}} defaultValue={this.props.messageData.name}></textarea>
                <button>Update Message</button>
            </form>
        )
    }

    //Render Reply message 
    renderReplyList = () => {
        return (
            <ul class="list-inline">
                <li>
                    <button className="replyButton" onClick={() => {this.toggelReply()}}>Reply to this message</button>
                </li>

            </ul>
        )
    }

    //Toggle Reply
    toggelReply = () => {
        let {isReply} = this.state
        this.setState({
            isReply: !isReply
        })
    }

    //Update Replay message Message
    updateReplyMessage = (ev) => {
        ev.preventDefault()
        this.props.replyMessage(this.props.idx, this.input.value)
        this.toggelReply()
    }
    
    //Render edit form
    renderReplyForm = () => {
        return (
            <form onSubmit={this.updateReplyMessage}>
                <input type="text" ref={(v)=>{this.input = v}} placeholder="Write a reply" defaultValue={this.props.messageData.replay} />
                <button>Update Reply Message</button>
            </form>
        )
    }

    render(){
        let {isEdit} = this.state
        let {isReply} = this.state
        
        return (
            <Fragment>
                { isEdit ? this.renderEditForm() : this.renderMessagesList()}
                { isReply ? this.renderReplyForm() : this.renderReplyList()}
            </Fragment>
        );
    }
}

export default MessagesList;