import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Home = ({ currentUser }) => {
    if (!currentUser.isAuthenticated) {
        return (
        <div className="home-hero">
            <h1>A new way of buying!</h1>
            <h3>Join Bwidder!</h3>
            <Link to="/signup" className="btn btn-primary">
                Sign Up
            </Link>
        </div>
        );
    }
    return (
        <div>
            <MessageTimeline 
                profileImg={currentUser.user.profileImg}
                username={currentUser.user.username} 
            />
        </div>
    );
};

export default Home;