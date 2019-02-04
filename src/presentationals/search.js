import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 10
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    boxShadow: '0px 0px 5px 0px #888',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  button: {
    margin: theme.spacing.unit
  }
})

class Search extends Component {
  handleKeyPress = e => {
    const { onSearch } = this.props
    if (e.key === 'Enter') onSearch()
  }

  render() {
    const { classes, onChange, onSearch } = this.props

    return (
      <div className={classes.wrapper}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            onChange={onChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={onSearch}>
            Search
          </Button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Search)
