import React, { Component } from "react";
import operation from "../DB/dboperations";
import Paper from "material-ui/Paper";
import {Card, CardActions, CardText} from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import ViewGroup from "./ViewGroup";

class FindById extends Component {

    state = {
        group: undefined,
        errorID: undefined,
        id : undefined
    }

    getById = () => {
        operation.find_byId(this.state.id)
        .then((group) => this.__getResponse(group))
    }

    changeId = (ev, value) =>  {
        let new_state
        if (value === undefined || value === null) {
            new_state = {errorID:"This field cannot be empty", id:undefined};
            this.setState(curState => (new_state));
        } else {
            new_state = {id:value, errorID:undefined};
            this.setState(curState => (new_state));
        }
    }

    __canSearch () {
        return this.state.id !== undefined && this.state.errorID === undefined;
    }
    __getResponse (group) {
        let new_state = {group: group};
        this.setState(curState => (new_state));
    }

    render () {
        let groups
        if (this.state.group === null)
            groups= []
        else
            if (this.state.group !== undefined)
                groups = [this.state.group]

        return (
            <Paper>
                <Card>
                    <CardText>
                        <TextField
                            hintText='Type the id of the group'
                            floatingLabelText='Group ID'
                            errorText={this.state.errorID}
                            onChange={this.changeId}/>
                    </CardText>

                    <CardActions>
                        <RaisedButton
                            label='Pesquisar'
                            onClick={this.getById}
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
