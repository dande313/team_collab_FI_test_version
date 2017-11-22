import React, { Component } from 'react';
import ReportLi from './ReportLi';

class ReportList extends Component {

  render() {
    const sorted_reports = this.props.reports.sort(function(a,b) {
      let timeA = new Date(a.created_at);
      let timeB = new Date(b.created_at);
      if(timeA < timeB) return 1;
      if(timeA > timeB) return -1;
      return 0;
    })

    const renderReports = sorted_reports.map(report => 
      <ReportLi key={report.id} report={report} />
    );

    return (
      <table className="reports-table">
        <tbody>
          <tr className="table-header">
            <th>Project</th><th>Date</th><th>Time</th><th>User</th><th>Assistance needed?</th><th>Clicks</th>
          </tr>
          {renderReports}
        </tbody>        
      </table>
    )
  }
}

export default ReportList;