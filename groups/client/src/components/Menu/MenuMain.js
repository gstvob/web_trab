import React from 'react';
import {List, ListItem} from 'material-ui/List';
import GroupAdd from 'material-ui/svg-icons/social/group-add';
import Group from "material-ui/svg-icons/social/group";
import Search from "material-ui/svg-icons/action/search";
import Divider from 'material-ui/Divider';

const style = {
    float:'left',
    width: '15%',
    marginTop:"30px"
}
const MenuMain = (props) => (

<div style={style}>
    <List>
        <ListItem onClick={props.addG} primaryText="Add Group" leftIcon={<GroupAdd/>} />
        <ListItem onClick={props.searchG} primaryText="Search Group" leftIcon={<Search />} />
        <ListItem onClick={props.addU} primaryText="Add User" leftIcon={<GroupAdd />} />
        <ListItem onClick={props.addUG} primaryText="Add user to group" leftIcon={<GroupAdd />} />
    </List>
    <Divider />
    <List>
        <ListItem primaryText="All Users" onClick={props.allU} rightIcon={<Group />} />
    </List>
</div>
);

export default MenuMain;
