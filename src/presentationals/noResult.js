import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  wrapper: {
    padding: theme.spacing.unit * 4,
    height: '70vh',
    width: '100vw'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
})

const NoResult = props => {
  const { classes } = props

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.container}>
        <h2>No Result</h2>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(NoResult)
