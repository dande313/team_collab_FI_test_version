import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { addClicks } from '../../redux/actions/reports.js';
import { connect } from 'react-redux';

class ReportLi extends Component {

  constructor(props) {
   super(props)
   this.state = {
     clicks: this.props.report.clicks || 0
   }
 }

  handleClick = (event) => {
    const reportAttributes = {id: this.props.report.id};
    reportAttributes['clicks'] = this.state.clicks;
    this.setState({ clicks: this.state.clicks +1 })
    this.props.addClicks(reportAttributes);
  }

  render(){
    let report = this.props.report;
    return (

      <tr className="table-row"  >
        <td> <Link to={`/reports/${report.id}`}><h4 >{report.title}</h4></Link> </td>
        <td> {report.created_at.substring(0, 10)}</td>
        <td> {report.created_at.substring(11, 19)}</td>
        <td> {report.user_email}</td>
        {report.assistance_needed ? (<td className="flagged-red"> yes </td>) : (<td> no </td>)}
      <td><button onClick={this.handleClick}> Clicks: {this.state.clicks} </button></td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return ({ reports: state.reports })
}

export default connect(mapStateToProps, {addClicks})(ReportLi);