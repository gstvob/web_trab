import React, { Component } from "react";
import {CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Paper from "material-ui/Paper";
import RaisedButton from 'material-ui/RaisedButton';
import operation from "../DB/dboperations";

class Login extends Component {

    state = {
        username: undefined,
        errorUsername: undefined,
    }

    change_username = (ev, value) => {
        if (value === "") {
            let new_state = {username:undefined, erroUsername:"Não pode ser vazio"}
            this.setState(curState => (new_state));
        } else {
            let new_state = {username:value, errorUsername:undefined};
            this.setState(curState => (new_state));
        }
    }
    can_try_login = () => {
        return this.state.username !== undefined && this.state.errorUsername === undefined;
    }

    try_login = () => {
        operation.login(this.state.username)
        .then((user) => this.success(user))
        .catch(() => this.failure())
    }

    success (user) {
        if (user.length > 0) {
            let new_state = {username:this.state.username, errorUsername:"Deu certo"}
            this.setState(curState => (new_state));
            this.props.onloginSuccess(user)
        }
        else {
            let new_state = {username:this.state.username, errorUsername:"Ta tudo errado"};
            this.setState(curState => (new_state));
        }
    }

    failure () {
        let new_state = {username:this.state.username, errorUsername:"Ta tudo errado"};
        this.setState(curState => (new_state));
    }
    render = () => {
        return (
            <Paper style={{marginLeft:"15%"}}>
                <CardText>
                    <TextField
                        hintText='Username'
                        floatingLabelText='User name'
                        errorText={this.state.errorUsername}
                        onChange={this.change_username}
                    />
                <br/>
                </CardText>
                <CardActions>
                    <RaisedButton
                        label="Login"
                        disabled={!this.can_try_login()}
                        onClick={this.try_login}
                    />
                </CardActions>
            </Paper>
        );

    }
};



export default Login;
