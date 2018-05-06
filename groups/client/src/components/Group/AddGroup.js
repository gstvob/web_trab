import React, { Component } from "react";
import {CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Paper from "material-ui/Paper";
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from "material-ui/Checkbox";

class AddGroup extends Component {
    state = {
        name: undefined,
        description: undefined,
        status: false,
        //participants: undefined,
        errorName: undefined
        //errorParticipants: undefined
    }

    canAdd () {
    const s = this.state;
    return s.errorName === undefined && s.name !== undefined;
    }

    changeName = (ev, value) => {
        if (value === '') {
            this.setState(prevState => ({errorName: 'Mandatory Field'}));
        } else {
            this.setState(prevState => ({name: value, errorName: undefined}));
        }
    }
    changeDescription = (ev, value) => {
      this.setState(prevState => ({description:value}));
    }

    changePublic = () => {
      this.setState(prevState => ({status: !this.state.status}));
    }

    addGroup = () => {
        const data = {
            name: this.state.name,
            description: this.state.description,
            status: this.state.status
        };
        this.props.onAdd(data);
    }

  render () {
    return (
        <Paper style={{marginLeft:"15%"}}>
            <CardText>
                <TextField
                    hintText='Name the group'
                    floatingLabelText='Group Name'
                    errorText={this.state.errorName}
                    onChange={this.changeName}
                />
                <br/>
                <TextField
                    hintText='Describe group'
                    floatingLabelText='Group Description'
                    errorText={this.state.erroAutor}
                    onChange={this.altereAutor}
                />
                <br/><br/><br/>
                <Checkbox
                    label="is this a public group?"
                    checked={this.state.status}
                    onCheck={this.changePublic.bind(this)}
                />
            </CardText>
            <br/>

            <CardActions>
                <RaisedButton
                    label="Register"
                    disabled={!this.canAdd()}
                    onClick={this.addGroup}
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

export default AddGroup
