import React, { Component } from "react";
import operation from "../DB/dboperations";
import Paper from "material-ui/Paper";
import {Card, CardActions, CardText} from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import ViewGroup from "./ViewGroup";

class FindById extends Component {

    state = {
        groups: undefined,
        errorName: undefined,
        name : undefined
    }

    getByName = () => {
        operation.find_byName(this.state.name)
        .then((groups) => this.__getResponse(groups))
    }

    changeName = (ev, value) =>  {
        let new_state
        if (value === undefined || value === null) {
            new_state = {errorName:"This field cannot be empty", name:undefined};
            this.setState(curState => (new_state));
        } else {
            new_state = {name:value, errorName:undefined};
            this.setState(curState => (new_state));
        }
    }

    __canSearch () {
        return this.state.name !== undefined && this.state.errorName === undefined;
    }
    __getResponse (groups) {
        let new_state = {groups: groups};
        this.setState(curState => (new_state));
    }

    render () {
        let groups = this.state.groups;
        return (
            <Paper>
                <Card>
                    <CardText>
                        <TextField
                            hintText='Type the name of the group'
                            floatingLabelText='Group Name'
                            errorText={this.state.errorName}
                            onChange={this.changeName}/>
                    </CardText>

                    <CardActions>
                        <RaisedButton
                            label='Search'
                            onClick={this.getByName}
                            disabled={!this.__canSearch()}
                        />
                    </CardActions>
                    <CardText>
                        <ViewGroup groups={groups}/>
                    </CardText>
                </Card>
            </Paper>
        )
    }
}

export default FindById
