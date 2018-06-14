import React, {Component} from "react";
import SelectField from 'material-ui/SelectField';
import {CardText, CardActions} from 'material-ui/Card';
import operation from "../DB/dboperations";
import MenuItem from 'material-ui/MenuItem';
import Paper from "material-ui/Paper";
import RaisedButton from 'material-ui/RaisedButton';

class DetailGroup extends Component {


    state = {
      user:undefined,
      success:undefined,
      user_value:undefined
    }

    handle_user_change = (ev, index, value) => {
        let new_state = {user_value: value};
        this.setState(curState => (new_state));
    }

    can_push = () => {
        return this.state.user_value !== undefined;
    }

    push_user = () => {
        const data ={
            idUser : this.state.user_value,
            idGroup : this.props.group._id
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

    render = () => {
        let userItems = [];
        let about = this.props.group.description===""? undefined:"Sobre: "+ this.props.group.description;
        let participants = []

        for (let i in this.props.group.participants) {
            participants.push(<p key={i}>{this.props.group.participants[i].username}</p>)
        }
        let infos = (
            <Paper style={{float:"left"}}>
                {participants}
                <p> {about} </p>
            </Paper>
        );
        if (this.props.user === this.props.group.admin) {
            if (this.state.user === undefined) {
                operation.all_users().then(
                    (list) => {
                        let new_state = {user:list};
                        this.setState(curState => (new_state));
                    }
                );
            }
            for (let i in this.state.user) {
                userItems.push(<MenuItem value={this.state.user[i]._id} key={i} primaryText={this.state.user[i].username}/>);
            }

            return (
                <div>
                    {infos}
                    <Paper style={{float:"right"}}>
                        <CardText>
                            {this.state.success}
                            <SelectField
                                value={this.state.user_value}
                                onChange={this.handle_user_change}
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
                </div>
            );
        }
        return(
            <div>
                {infos}
            </div>
        );
    }
}

export default DetailGroup;
