import React, { Component } from "react";
import {CardText, CardActions} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import operation from "../DB/dboperations";
import MenuItem from 'material-ui/MenuItem';
import Paper from "material-ui/Paper";
import RaisedButton from 'material-ui/RaisedButton';

class PushUser extends Component {

    state = {
        group: undefined,
        user: undefined,
        group_value: undefined,
        user_value: undefined,
        success:""
    }

    push_user = () => {
        console.log(this.state.group_value);
        console.log(this.state.user_value);
        const data ={
            idUser : this.state.user_value,
            idGroup : this.state.group_value
        };
        operation.push_user_into_group(data)
        .then(r=>{
                let new_state = {
                    success : "Adicionado",
                };
                this.setState(curState => (new_state));
        })
        .catch(r=>console.log("fail"));
    }

    handleGroupChange = (ev, index, value) => {
        let new_state = {group_value: value};
        this.setState(curState => (new_state));
    }
    handleUserChange = (ev, index, value) => {
        let new_state = {user_value: value};
        this.setState(curState => (new_state));
    }

    can_push = () => {
        return this.state.group_value !== undefined && this.state.user_value !== undefined;
    }

    render () {
        let groupItems = [];
        let userItems = [];
        if (this.state.user === undefined) {
            operation.all_users().then(
                (list) => {
                    let new_state = {user:list};
                    this.setState(curState => (new_state));
                }
            );
        }
        if (this.state.group === undefined) {
            operation.list_groups().then(
                (list) => {
                    let new_state = {group:list};
                    this.setState(curState => (new_state));
                }
            );
        }
        for (let i in this.state.group) {
            groupItems.push(<MenuItem value={this.state.group[i]._id} key={i} primaryText={this.state.group[i].name}/>);
        }
        for (let i in this.state.user) {
            userItems.push(<MenuItem value={this.state.user[i]._id} key={i} primaryText={this.state.user[i].username}/>);
        }
        return (
            <Paper style={{marginLeft:"15%"}}>
                <CardText>
                    {this.state.success}
                    <SelectField
                        value={this.state.group_value}
                        onChange={this.handleGroupChange}
                        maxHeight={200}>
                    {groupItems}
                    </SelectField>
                    <br/>
                    <SelectField
                        value={this.state.user_value}
                        onChange={this.handleUserChange}
                        maxHeight={200}>
                    {userItems}
                    </SelectField>
                </CardText>
                <CardActions>
                    <RaisedButton
                        label="Push"
                        disabled={!this.can_push()}
                        onClick={this.push_user}
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

export default PushUser
