import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import FindAll from "./FindAll";
import FindById from "./FindById";
import FindByName from "./FindByName";

class Search extends Component {
    state = {
      type: 'all',
    };

    tabsStyle = {
        color:"black",
        backgroundColor:"#ECEFF1"
    }

    changeMode = (tab) => {
        this.setState(prevState => ({tab}))
    }

    render() {
        return (
            <Paper zDepth={3} style={{marginTop:"35px", width:"84%", float:"right"}}>
                <Tabs value={this.state.tab} onChange={this.changeMode}>
                    <Tab style={this.tabsStyle} label='All' value='all'>
                        <FindAll/>
                    </Tab>

                    <Tab style={this.tabsStyle} label='Find by id' value='id'>
                        <FindById/>
                    </Tab>

                    <Tab style={this.tabsStyle} label='Find by name' value='name'>
                        <FindByName/>
                    </Tab>
                </Tabs>
            </Paper>
        )
    }
}

export default Search
