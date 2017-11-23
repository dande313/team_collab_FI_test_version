import ReportService from '../../services/ReportService'

const prependReports = reports => {
  return {
    type: 'SUCCESSFUL_REPORTS_FETCH',
    reports: reports
  }
}

export const fetchReports = () => {
  return dispatch => {
    ReportService.fetchReports()
      .then(reports => {
        dispatch(prependReports(reports))
      })
  }
}

export const increment = (key)  => {
  return {
    type: 'INCREMENT_CLICKS',
    key
  }
}

const prependReport = report => {
  return {
    type: 'SUCCESSFUL_CREATE_REPORT',
    payload: report
  }
}

export const createReport = (report, routerHistory) => {
  return dispatch => {
    return ReportService.createReport(report)
      .then(report => {
        dispatch(prependReport(report));
        routerHistory.push('/reports')
      })
  }
}

const destroyReport = id => {
  return {
    type: 'SUCESSFUL_DELETE_REPORT',
    id: id
  }
}

export const deleteReport = (report, routerHistory) => {
  const id = report.id
  return dispatch => {
    return ReportService.deleteReport(report)
      .then(report => {
        dispatch(destroyReport(id))
        routerHistory.push('/deleted');
      })
  }
}

const updateReportClick = report => {
  return {
    type: 'SUCCESSFULLY_ADDED_CLICK',
    id: report.id
  }
}

export const addClicks = (report) => {
   return dispatch => {
     return ReportService.addClick(report)
      .then(report => {
      dispatch(updateReportClick(report));
    })
   }
 }