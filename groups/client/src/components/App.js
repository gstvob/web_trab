import React, { Component } from "react";
import MenuMain from "./Menu/MenuMain";
//import AddGroup from "./Group/AddGroup";
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";

class App extends Component {

    render () {
        return (
            <Paper zDepth={2}>
                <AppBar style={{
                    backgroundColor:"#ECEFF1"
                }} title="Groups Micro-service" titleStyle={{color:"#424242"}} showMenuIconButton={false} />
                <MenuMain/>
            </Paper>
        );
    }
}

export default App
