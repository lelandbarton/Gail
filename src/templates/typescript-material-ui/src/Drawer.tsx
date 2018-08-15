
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';

// import Button from '@material-ui/core/Button';

// import Divider from '@material-ui/core/Divider';



const styles = {
  fullList: {
    width: 'auto',
  },
  list: {
    width: 250,
  },
};

interface IMyDrawerProps {
	open: boolean;
	onDrawerToggle: () => any 
}

type PropsWithStyles = IMyDrawerProps
					& WithStyles<'list'|'fullList'>

class MyDrawer extends React.Component<PropsWithStyles> {


  public render() {

  	return <Drawer 
  				open={this.props.open} 
  				onClose={this.props.onDrawerToggle}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.onDrawerToggle}
            onKeyDown={this.props.onDrawerToggle}
          >
		      <div className={this.props.classes.list}>
		        <List>{mailFolderListItems}</List>
		        <Divider />
		        <List>{otherMailFolderListItems}</List>
		      </div>
          </div>
        </Drawer>
  }

}


export default withStyles(styles)<PropsWithStyles>(MyDrawer);
