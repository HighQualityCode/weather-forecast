import React from 'react'
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar'

import TablePaginationActions from './tablePaginationActions'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },

  wrapper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },

  table: {
    minWidth: 1024
  },

  title: {
    fontSize: 24,
    display: 'flex',
    justifyContent: 'center'
  }
})

class CurrentLocation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rowsPerPage: 5,
      page: 0
    }
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: parseInt(event.target.value) })
  }

  render() {
    const { classes, currentLocation, weather } = this.props
    const { rowsPerPage, page } = this.state
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, weather.length - page * rowsPerPage)

    return (
      <div className={classes.root}>
        <div className={classes.title}>City: {currentLocation.title}</div>
        <Paper className={classes.wrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>State</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Min Temp</TableCell>
                <TableCell align="center">Max Temp</TableCell>
                <TableCell align="center">Average Temp</TableCell>
                <TableCell align="center">Wind Speed</TableCell>
                <TableCell align="center">Wind Direction</TableCell>
                <TableCell align="center">Air Pressure</TableCell>
                <TableCell align="center">Humidity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {weather
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <Avatar
                        src={`https://www.metaweather.com/static/img/weather/${
                          row.weather_state_abbr
                        }.svg`}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.weather_state_name}
                    </TableCell>
                    <TableCell align="center">
                      {moment(row.created).format('YYYY-MM-DD: HH:mm')}
                    </TableCell>
                    <TableCell align="center">
                      {row.min_temp.toFixed(2)}
                    </TableCell>
                    <TableCell align="center">
                      {row.max_temp.toFixed(2)}
                    </TableCell>
                    <TableCell align="center">
                      {row.the_temp.toFixed(2)}
                    </TableCell>
                    <TableCell align="center">
                      {row.wind_speed.toFixed(2)}
                    </TableCell>
                    <TableCell align="center">
                      {row.wind_direction.toFixed(2)}
                    </TableCell>
                    <TableCell align="center">
                      {row.air_pressure.toFixed(2)}
                    </TableCell>
                    <TableCell align="center">
                      {row.humidity.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={weather.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(CurrentLocation)
