import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import GroupAdd from 'material-ui/svg-icons/social/group-add';
import Search from "material-ui/svg-icons/action/search";

const style = {
    float:'left',
    width: '15%',
    marginTop:"30px"
}
class MenuMain extends Component {
    user_groups = () => {
        let groups = this.props.groups;
        return groups.map( (group, index) => (
          <ListItem key={index} primaryText={group.name} />
        ) )
    }
    
    render () {
        if (this.props.logged === false) {
            return (<div style={style}>
                <List>
                    <ListItem onClick={this.props.login} primaryText="Logar"/>
                </List>
            </div>);
        } else {
            return (<div style={style}>
                <List>
                    <ListItem onClick={this.props.addG} primaryText="Create Group" leftIcon={<GroupAdd/>} />
                    <ListItem onClick={this.props.searchG} primaryText="Search Group" leftIcon={<Search />} />
                    {this.user_groups()}
                </List>

            </div>);
        }
    }
};

export default MenuMain;
