import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";

const MessageTimeline = ({ profileImg, username }) => {
    return (
        <div className="row">
            <UserAside profileImg={profileImg} username={username} />
            <MessageList />
        </div>
    )
}

export default MessageTimeline;