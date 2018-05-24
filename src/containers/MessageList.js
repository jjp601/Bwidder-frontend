import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessages, removeMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
    componentDidMount() {
        this.props.getMessages();
    }
    render() {
        const { messages, removeMessage, currentUser } = this.props;
        let messageList = messages.map(message => (
            <MessageItem 
                key={message._id} 
                date={message.createAt} 
                content={message.content}
                username={message.user.username}
                profileImg={message.user.profileImg} 
                removeMessage={removeMessage.bind(this, message.user._id, message._id)}
                isCorrectUser={currentUser === message.user._id}
            />
        ));
        return (
            <div className="row col-sm-8">
                <div className="offset-1 col-sm-10">
                    <ul className="list-group" id="messages">
                        {messageList}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        currentUser: state.currentUser.user.id
    };
}

export default connect(mapStateToProps, { getMessages, removeMessage })(MessageList);