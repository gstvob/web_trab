import React from 'react';
import {List, ListItem} from 'material-ui/List';
import GroupAdd from 'material-ui/svg-icons/social/group-add';
import Group from "material-ui/svg-icons/social/group";
import Search from "material-ui/svg-icons/action/search";
import Divider from 'material-ui/Divider';
import Remove from "material-ui/svg-icons/content/remove";

const style = {
    float:'left',
    width: '15%',
    marginTop:"30px"
}
const MenuMain = () => (
<div style={style}>
    <List>
        <ListItem primaryText="Add Group" leftIcon={<GroupAdd/>} />
        <ListItem primaryText="Search Group" leftIcon={<Search />} />
        <ListItem primaryText="Remove Groups" leftIcon={<Remove />} />
    </List>
    <Divider />
    <List>
        <ListItem primaryText="All Groups" rightIcon={<Group />} />
        <ListItem primaryText="All Users" rightIcon={<Group />} />
    </List>
</div>
);

export default MenuMain;
