const API_URL = 'http://localhost:3001/api'

const ReportService = {
  fetchReports() {
    return fetch(`${API_URL}/reports`)
      .then(response => response.json())
  },

  createReport(report) {
    const request = {
      method: 'POST',
      body: JSON.stringify({
        report: report
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }

    return fetch(`${API_URL}/reports`, request)
      .then(response => response.json())
  },

  deleteReport(report) {
    return fetch(`${API_URL}/reports/` + report.id, {
      method: 'delete'
    })
  },

  addClick(report) {
    return fetch(`${API_URL}/reports/${report.id}`, {
         method:'PATCH',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           clicks: report.clicks + 1
         })
    })
  }
}

export default ReportService;