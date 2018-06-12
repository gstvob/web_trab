import React, {Component} from 'react'
import {Tab, Tabs} from "material-ui/Tabs";
import Paper from "material-ui/Paper";
import DetailGroup from "./DetailGroup";
class ViewGroup extends Component {

    tabsStyle = {
        color:"black",
        backgroundColor:"#ECEFF1"
    }

  __table () {
      console.log(typeof(this.props.groups))
      return this.props.groups.map( (group, index) => (
          <Tab style={this.tabsStyle} label={group.name} value={group._id}>
            <DetailGroup group={group}/>
          </Tab>
      ))
  }

  render() {
    let content
    if (this.props.groups !== undefined)
        if (this.props.groups.length === 0)
            content = <h3>No groups were found</h3>
        else
            content =  this.__table()
    return (
        <Paper zDepth={3} style={{marginTop:"35px", width:"84%", float:"right"}}>
            <Tabs onChange={this.change_active}>
                {content}
            </Tabs>
        </Paper>)
  }
}

export default ViewGroup
