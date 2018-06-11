import React, {Component} from 'react'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class ViewGroup extends Component {


  __table() {
    const rows = this.__rows()
    return <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Num</TableHeaderColumn>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Participants</TableHeaderColumn>
          <TableHeaderColumn>Public</TableHeaderColumn>
          <TableHeaderColumn>Description</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {rows}
      </TableBody>
      </Table>
  }

  __rows () {
      console.log(typeof(this.props.groups))
      return this.props.groups.map( (group, index) => (
        <TableRow key={index}>
        <TableRowColumn>{index+1}</TableRowColumn>
        <TableRowColumn>{group._id}</TableRowColumn>
        <TableRowColumn>{group.name}</TableRowColumn>
        <TableRowColumn>{group.participants.map((participant, index) => (participant['username']+", "))}</TableRowColumn>
        <TableRowColumn>{String(group.status)}</TableRowColumn>
        <TableRowColumn>{group.description}</TableRowColumn>
        </TableRow>
      ) )
  }

  render() {
    let content
    console.log(this.props.groups)
    if (this.props.groups !== undefined)
        if (this.props.groups.length === 0)
            content = <h3>No groups were found</h3>
        else
            console.log("top")
            content =  this.__table()
    return (<div>{content}</div>)
  }
}

export default ViewGroup
