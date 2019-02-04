import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  loginContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4
  },
  loginWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.unit * 8,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing.unit * 4
    }
  },
  input: {
    width: '100%'
  },
  button: {
    width: '100%',
    marginTop: theme.spacing.unit * 2
  }
})

const LoginPage = props => {
  const { classes, login, onChange } = props

  return (
    <div className={classes.loginContainer}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper className={classes.loginWrapper}>
          <h2>Weather Forecast</h2>
          <TextField
            required
            label="UserName"
            placeholder="username"
            margin="normal"
            variant="outlined"
            name="username"
            className={classes.input}
            onChange={onChange}
          />
          <TextField
            required
            label="Password"
            placeholder="password"
            margin="normal"
            variant="outlined"
            type="password"
            name="password"
            className={classes.input}
            onChange={onChange}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            size="large"
            onClick={login}>
            Log in
          </Button>
        </Paper>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(LoginPage)
