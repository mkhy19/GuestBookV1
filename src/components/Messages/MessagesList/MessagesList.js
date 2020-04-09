import React , {Component, Fragment} from 'react';
import './MessagesList'

class MessagesList extends Component{
    state = {
        isEdit: false
    }

    //Render message 
    renderMessagesList = () => {
        return (
            <li>
                <span>{this.props.messageData.name}</span>
                <button onClick={() => {this.toggelState()}}>Edit</button>
                <button onClick={() => {this.props.deleteMessage(this.props.idx)}}>Delete</button>
            </li>
        )
    }
    
    //Toggle state
    toggelState = () => {
        let {isEdit} = this.state
        this.setState({
            isEdit: !isEdit
        })
    }

    //Update Message item
    updateMessageItem = (ev) => {
        ev.preventDefault()
        this.props.editMessage(this.props.idx, this.input.value)
        this.toggelState()

    }

    //Render edit form
    renderEditForm = () => {
        return (
            <form onSubmit={this.updateMessageItem}>
                <input type="text" ref={(v)=>{this.input = v}} defaultValue={this.props.messageData.name} />
                <button>Update Message</button>
            </form>
        )
    }

    render(){
        let {isEdit} = this.state

        return (
            <Fragment>
                { isEdit ? this.renderEditForm() : this.renderMessagesList()}
            </Fragment>

        );
    }
}

export default MessagesList;