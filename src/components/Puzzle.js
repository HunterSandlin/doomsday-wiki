import c from 'classnames';
import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import withStyles from '@material-ui/core/styles/withStyles';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import Decklist from './Decklist';


const styles = theme => ({
  deck: {
    padding: 0,
    '& > *': {
      width: '100%',
    },
  },
  panel: {
    padding: 0,
  },
  panelDetails: {
    display: 'block',
  },
});


class Puzzle extends React.PureComponent {
  render() {

    const { classes } = this.props;

    const {
      deckFile,
      oppBoard,
      oppHand,
      situationNotes,
      solution,
      solutionNotes,
      title,
      yourBoard,
      yourHand,
    } = this.props.data;

    return (
      <>
        <Typography children={title} paragraph variant="h4" />
        <Box my={2}>
          <ExpansionPanel classes={{root: classes.panel}}>
            <ExpansionPanelSummary expandIcon={<ChevronDownIcon />}>
              <Typography children="See Decklist:" />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails classes={{root: c(classes.panelDetails, classes.deck)}}>
              <div>
                <Divider />
                <Decklist deckFile={deckFile} hr={false} />
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Box>
        <Typography children={`Opponent's Hand: ${oppHand}`} />
        <Typography children={`Opponent's Board: ${oppBoard}`} />
        <Typography children={`Your Hand: ${yourHand}`} />
        <Typography children={`Your Board: ${yourBoard}`} />
        <Typography children={situationNotes} />
        <Box mt={2}>
          <ExpansionPanel classes={{root: classes.panel}}>
            <ExpansionPanelSummary expandIcon={<ChevronDownIcon />}>
              <Typography children="Solution:" />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails classes={{root: classes.panelDetails}}>
              <Typography children={solution} paragraph />
              <Typography children={solutionNotes} paragraph />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Box>
      </>
    );
  }
}


export default withStyles(styles)(Puzzle);
