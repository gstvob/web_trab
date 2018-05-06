import React, { Component } from "react";
import MenuMain from "./Menu/MenuMain";
import AddGroup from "./Group/AddGroup";
import Search from "./Group/Search";
import operation from "./DB/dboperations"
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";

class App extends Component {

    action = {
        HOME: "homepage",
        ADDGROUP: "add group",
        SEARCH: "search group"
    };

    state = {
        current: this.action.HOME
    }

    addGroupPage = () => {
        let new_state = {current: this.action.ADDGROUP};
        this.setState(curState => (new_state))
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

    _setcontent = (current) => {
        switch(current) {
            case this.action.SEARCH:
                return <Search/>
            case this.action.ADDGROUP:
                return <AddGroup onAdd ={this.new_group}/>
            default:
                return <div> fucken ell amte </div>
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
                    <MenuMain addG={this.addGroupPage} searchG={this.search_group}/>
                    {content}
                </Paper>
            </div>
        );
    }
}

export default App
