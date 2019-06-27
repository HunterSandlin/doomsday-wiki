import React from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import withStyles from '@material-ui/core/styles/withStyles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

// import Markdown from '../Markdown';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';
import { SidebarConsumer } from '../contexts/Sidebar';


const styles = theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
  },
  drawerFixed: {
    padding: 0,
    width: theme.mixins.sidebar.width,
  },
  drawerTemporary: {
    padding: 0,
  },
  root: {
    height: '100%',
  },
});


class Sidebar extends React.PureComponent {
  render() {
    const { classes, theme, width } = this.props;
    const isMobile = isWidthDown(theme.mixins.sidebar.treshold, width);
    const content = (
      <Grid container className={classes.root} direction="column" wrap="nowrap">
        <Grid item children={<SidebarHeader size={isMobile ? 'small' : 'medium'} />} />
        <Divider />
        <Grid item className={classes.body}>
          <SidebarMenu />
          <Divider />
          {/* <Markdown source="notation.md" tableCellProps={{padding: 'dense'}} /> */}
          {/* <Paper children={<Markdown source="links.md" />} elevation={0} square /> */}
        </Grid>
      </Grid>
    );
    const drawer = (
      <SidebarConsumer>
        {({state, toggleDrawer}) => (
          <SwipeableDrawer children={content}
                           classes={{paper: classes.drawerTemporary}}
                           onClose={toggleDrawer(false)}
                           onOpen={toggleDrawer(true)}
                           open={state.drawerIsOpen} />
        )}
      </SidebarConsumer>
    );
    const drawerFixed = (
      <Drawer children={content} classes={{paper: classes.drawerFixed}} variant="permanent" />
    );
    return isMobile ? drawer : drawerFixed;
  }
}


export default withWidth()(withStyles(styles, {withTheme: true})(Sidebar));