import React, { Component } from "react";
import MenuMain from "./Menu/MenuMain";
import Login from "./User/Login";
import AddGroup from "./Group/AddGroup";
import Search from "./Group/Search";
import operation from "./DB/dboperations"
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";

class App extends Component {

    action = {
        HOME: "homepage",
        LOGIN:"login",
        ADDGROUP: "add group",
        SEARCH: "search group",
    };

    state = {
        current: this.action.HOME,
        logged : false,
        user: undefined,
        groups:[]
    }

    login = () => {
        let new_state = {current: this.action.LOGIN};
        this.setState(curState=>(new_state));
    }

    log = (user_login) => {
        let new_state = {current: this.action.HOME, logged:true, user:user_login}
        this.setState(curState => (new_state))
        this.get_user_groups()
    }

    addGroupPage = () => {
        let new_state = {current: this.action.ADDGROUP};
        this.setState(curState => (new_state));
    }

    new_group = (data) => {
        operation.insert_group(data)
        .then((r) => console.log(r))
        .catch(() => console.log("fail"));
        let new_state = {current:this.action.HOME};
        this.setState(curState => (new_state));
    }
    search_group = () => {
        let new_state = {current: this.action.SEARCH};
        this.setState(curState => (new_state));
    }
    get_user_groups = () => {
        operation.find_user_groups(this.state.user[0]["_id"])
            .then((groups) => this._handle_groups(groups))
            .catch(() => {return null})
    }
    _handle_groups(groups) {
        let new_state = {groups:groups}
        this.setState(curState => (new_state))
    }
    _setcontent = (current) => {
        switch(current) {
            case this.action.LOGIN:
                return <Login onloginSuccess={this.log}/>
            case this.action.SEARCH:
                return <Search/>
            case this.action.ADDGROUP:
                return <AddGroup user={this.state.user[0]["_id"]}onAdd ={this.new_group}/>
            default:
                return <div> Bem vindo {this.state.user === undefined ? "":this.state.user[0]["username"]}</div>
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
                    <MenuMain login={this.login} groups={this.state.groups} logged={this.state.logged} addU={this.addUser} addG={this.addGroupPage} searchG={this.search_group} allU={this.viewUsers} addUG={this.push_user}/>
                </Paper>
                {content}
            </div>
        );
    }
}

export default App
