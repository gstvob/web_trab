import React, {Component} from 'react'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class View extends Component {

  __table(users) {
    const rows = this.__rows(users)
    return <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Num</TableHeaderColumn>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>UserName</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {rows}
      </TableBody>
      </Table>
  }

  __rows (users) {
      return users.map( (user, index) => (
        <TableRow key={index}>
            <TableRowColumn>{index+1}</TableRowColumn>
            <TableRowColumn>{user._id}</TableRowColumn>
            <TableRowColumn>{user.username}</TableRowColumn>
        </TableRow>
      ) )
  }

  render() {
    let content
    if (this.props.users !== undefined)
      if (this.props.users.length === 0)
      content = <h3>No users were found</h3>
    else
      content =  this.__table(this.props.users)

    return (<div>{content}</div>)
  }
}

export default View
