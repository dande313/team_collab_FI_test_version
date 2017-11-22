import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class ReportLi extends Component {
  constructor() {
    super()
    this.state = {count: 0};
  }

  handleClick = (event) => {
    let newCount = (this.state.count + 1)
    this.setState({count: newCount})
  }

  render(){

    let report = this.props.report;

    return (

      <tr className="table-row"  >
        <td> <Link to={`/reports/${report.id}`}><h4 >{report.title}</h4></Link> </td>
        <td> {report.created_at.substring(0, 10)}</td>
        <td> {report.created_at.substring(11, 19)}</td>
        <td> {report.info}</td>
        <td> {report.user_email}</td>
        {report.assistance_needed ? (<td className="flagged-red"> yes </td>) : (<td> no </td>)}
      <td><button onClick={this.handleClick}> Counter: {this.state.count} </button></td>
      </tr>
    )
  }
}

export default ReportLi;