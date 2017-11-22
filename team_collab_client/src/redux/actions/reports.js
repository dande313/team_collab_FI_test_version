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

  export function addClicks(report) {
     return (dispatch) => {
       dispatch({ type: 'ADD_CLICKS' })
       return fetch(`http://localhost:3001/api/reports/${report.id}`, {
         method:'PATCH',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           clicks: report.clicks + 1
         })
       })
       .then((res) => res.json())
       .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_ADDED_CLICK', payload: responseJson })
       return responseJson
       })
     }
   }