import React, { Component } from "react";
import MenuMain from "./Menu/MenuMain";
import AddUser from "./User/AddUser";
import FindAllUsers from "./User/FindAllUsers";
import AddGroup from "./Group/AddGroup";
import Search from "./Group/Search";
import PushUser from "./Group/PushUser";
import operation from "./DB/dboperations"
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";

class App extends Component {

    action = {
        HOME: "homepage",
        ADDUSER:"add user",
        ADDGROUP: "add group",
        SEARCH: "search group",
        VIEWUSERS: "view users",
        PUSHUSER : "push user"
    };

    state = {
        current: this.action.HOME,
    }

    addUser = () => {
        let new_state = {current: this.action.ADDUSER};
        this.setState(curState => (new_state));
    }
    addGroupPage = () => {
        let new_state = {current: this.action.ADDGROUP};
        this.setState(curState => (new_state));
    }

    viewUsers = () => {
        let new_state = {current: this.action.VIEWUSERS};
        this.setState(curState => (new_state));
    }
    new_group = (data) => {
        operation.insert_group(data)
        .then((r) => console.log(r))
        .catch(() => console.log("fail"));

        let new_state = {current:this.action.HOME};
        this.setState(curState => (new_state));
    }

    push_user = () => {
        let new_state = {current:this.action.PUSHUSER};
        this.setState(curState => (new_state));
    }

    search_group = () => {
        let new_state = {current: this.action.SEARCH};
        this.setState(curState => (new_state));
    }

    new_user = (data) => {
        operation.add_user(data)
        .then((r)=>console.log(r))
        .catch(()=>console.log("fail"));

        let new_state = {current:this.action.HOME};
        this.setState(curState => (new_state));
    }

    _setcontent = (current) => {
        switch(current) {
            case this.action.ADDUSER:
                return <AddUser onAddU={this.new_user} />
            case this.action.SEARCH:
                return <Search/>
            case this.action.VIEWUSERS:
                return <FindAllUsers/>
            case this.action.ADDGROUP:
                return <AddGroup onAdd ={this.new_group}/>
            case this.action.PUSHUSER:
                return <PushUser/>
            default:
                return <div> Micro serviço de grupos </div>
        }
    }

    render () {
        let content = this._setcontent(this.state.current);
        return (
            <div>
                <Paper>
                    <AppBar style={{
                        backgroundColor:"#ECEFF1"
                    }} title="Groups Micro-service" titleStyle={{color:"#424242"}} showMenuIconButton={false} />
                    <MenuMain addU={this.addUser} addG={this.addGroupPage} searchG={this.search_group} allU={this.viewUsers} addUG={this.push_user}/>
                </Paper>
                {content}
            </div>
        );
    }
}

export default App
