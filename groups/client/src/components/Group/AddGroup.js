import React, { Component } from "react";
import {Card, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from "material-ui/Checkbox";

class AddGroup extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        name: undefined,
        description: undefined,
        public: false,
        //participants: undefined,
        errorName: undefined
        //errorParticipants: undefined
    }

  canAdd () {
    const s = this.state;
    return s.errorName === undefined;
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
      this.setState(prevState => ({public: !this.state.public}));
  }

  addGroup = () => {
    const data = {
      name: this.state.name,
      description: this.state.description,
      public: this.state.public
  };
    this.props.onAdd(data);
  }

  render () {
    return (
        <Card>
            <CardText>
                <TextField
                    hintText='type the name of the group'
                    floatingLabelText='Group Name'
                    errorText={this.state.errorName}
                    onChange={this.changeName}
                />
                <br/>
                <TextField
                    hintText='type the description of the group'
                    floatingLabelText='Group Description'
                    errorText={this.state.erroAutor}
                    onChange={this.altereAutor}
                />
                <br/>
                <Checkbox
                    label="is this a public group?"
                    checked={this.state.public}
                    onCheck={this.changePublic.bind(this)}
                />

            </CardText>

            <CardActions>
                <RaisedButton
                    label="Cadastrar"
                    disabled={!this.canAdd()}
                    onClick={this.addGroup}
                />
                <RaisedButton
                    label="Cancelar"
                    onClick={this.props.onCancele}
                />
            </CardActions>
        </Card>
    );
  }
}

export default AddGroup
