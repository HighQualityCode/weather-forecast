import React from 'react'
import { ClipLoader } from 'react-spinners'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  loadingContainer: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#aaa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Loading = props => {
  const { classes } = props
  return (
    <div className={classes.loadingContainer}>
      <div className="sweet-loading">
        <ClipLoader
          sizeUnit={'px'}
          size={150}
          color={'#123abc'}
          loading={true}
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(Loading)
