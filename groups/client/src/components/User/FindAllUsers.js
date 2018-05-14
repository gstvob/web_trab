import React, { Component } from "react";
import operation from "../DB/dboperations";
import Paper from "material-ui/Paper";
import {Card, CardActions, CardText} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import View from "./View";

class FindAllUsers extends Component {

    state = {
        users: undefined
    }

    getAll = () => {
        operation.all_users()
        .then((list) => this.__getResponse(list))
        .catch(() => console.log("fail"))
    }

    __getResponse (list) {
        let new_state = {users: list};
        this.setState(curState => (new_state));
    }

    render () {
        let users = this.state.users;
        return(
            <Paper zDepth={3} style={{marginTop:"35px", width:"84%", float:"right"}}>
                <Card>
                    <CardActions>
                        <RaisedButton
                            label='Fetch All'
                            onClick={this.getAll}
                        />
                    </CardActions>
                    <CardText>
                        <View users={users}/>
                    </CardText>
                </Card>
            </Paper>


        );
    }
}

export default FindAllUsers
