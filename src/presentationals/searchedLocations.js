import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

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
    minWidth: 700
  },

  tableRow: {
    cursor: 'pointer'
  }
})

class SearchedLocations extends React.Component {
  render() {
    const { locations, classes, getLocationByPosition } = this.props
    return (
      <div className={classes.root}>
        <Paper className={classes.wrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Distance</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Location Type</TableCell>
                <TableCell align="center">WOEID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locations.map(location => (
                <TableRow
                  key={location.latt_long}
                  className={classes.tableRow}
                  onClick={() =>
                    getLocationByPosition({ lattlong: location.latt_long })
                  }>
                  <TableCell align="center">{location.distance}</TableCell>
                  <TableCell align="center">{location.title}</TableCell>
                  <TableCell align="center">{location.location_type}</TableCell>
                  <TableCell align="center">{location.woeid}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(SearchedLocations)
