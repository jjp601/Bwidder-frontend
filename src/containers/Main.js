import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../components/Home";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";

const Main = props => {
    const { authUser, errors, removeError, currentUser } = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Home currentUser={currentUser} {...props} />} />
                <Route exact path="/signin" render={props => {
                    return (
                        <AuthForm removeError={removeError} errors={errors} onAuth={authUser} buttonText="Sign In" heading="Welcome Back." {...props} />
                    )
                }} />
                <Route exact path="/signup" render={props => {
                    return (
                        <AuthForm removeError={removeError} errors={errors} onAuth={authUser} signUp buttonText="Sign up!" heading="Join Bwidder today!" {...props} />
                    )
                }} />
                <Route path="/users/:id/messages/new" component={withAuth(MessageForm)} />
            </Switch>    
        </div>
    );
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    };
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));
