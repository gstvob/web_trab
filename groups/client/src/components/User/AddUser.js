import React, { Component } from "react";
import {CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Paper from "material-ui/Paper";
import RaisedButton from 'material-ui/RaisedButton';

class AddUser extends Component {
    state = {
        username: undefined,
        errorName: undefined
    }

    canAdd () {
        const s = this.state;
        return s.errorName === undefined && s.username !== undefined;
    }

    changeName = (ev, value) => {
        if (value === '') {
            this.setState(prevState => ({errorName: 'Mandatory Field'}));
        } else {
            this.setState(prevState => ({username: value, errorName: undefined}));
        }
    }

    addUser = () => {
        const data = {
            username: this.state.username,
        };
        this.props.onAddU(data);
    }

  render () {
    return (
        <Paper style={{marginLeft:"15%"}}>
            <CardText>
                <TextField
                    hintText='Username'
                    floatingLabelText='User name'
                    errorText={this.state.errorName}
                    onChange={this.changeName}
                />
            <br/>
            </CardText>
            <CardActions>
                <RaisedButton
                    label="Register"
                    disabled={!this.canAdd()}
                    onClick={this.addUser}
                />
                <RaisedButton
                    label="Cancel"
                    onClick={this.props.onCancele}
                />
            </CardActions>
        </Paper>
    );
  }
}

export default AddUser
