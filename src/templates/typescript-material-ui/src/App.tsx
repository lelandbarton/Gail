
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';


import { withStyles, WithStyles } from '@material-ui/core/styles';

import * as React from 'react';
import Drawer from './Drawer';

const styles = {

  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  root: {
    flexGrow: 1,
  },
};


interface IAppState {
  isDrawerOpen: boolean;
}

class App extends React.Component<WithStyles<'root' | 'menuButton' | 'flex'>, IAppState> {

  public state = {
    isDrawerOpen: false
  }



  public render() {
    return (
      <div className="App">
        <Drawer open={this.state.isDrawerOpen} 
                onDrawerToggle={this.onDrawerToggle}
                />
        <AppBar position="static">
          <Toolbar>
            <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu" onClick={this.onDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={this.props.classes.flex}>
              Finly
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  private onDrawerToggle = () => this.setState({isDrawerOpen: !this.state.isDrawerOpen});
}

export default withStyles(styles)(App);
