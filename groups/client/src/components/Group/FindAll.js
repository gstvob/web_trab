import React, { Component } from "react";
import operation from "../DB/dboperations";
import Paper from "material-ui/Paper";
import {Card, CardActions, CardText} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import ViewGroup from "./ViewGroup";

class FindAll extends Component {

    state = {
        groups: undefined
    }

    getAll = () => {
        operation.list_groups()
        .then((list) => this.__getResponse(list))
    }

    __getResponse (list) {
        let new_state = {groups: list};
        this.setState(curState => (new_state));
    }

    render () {
        let groups = this.state.groups;
        return(
            <Paper>
                <Card>
                    <CardActions>
                        <RaisedButton
                            label='Fetch All'
                            onClick={this.getAll}
                        />
                    </CardActions>
                    <CardText>
                        <ViewGroup groups={groups}/>
                    </CardText>
                </Card>
            </Paper>


        );
    }
}

export default FindAll
