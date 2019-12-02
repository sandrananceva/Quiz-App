import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '600px', 
    height: '600px'
    
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  }

}));

export const ViewScore = (props) => {
  const classes = useStyles();
    console.log(props.results);
  return (
    <div className={classes.root}>

      <Dialog open={props.viewPopup} aria-labelledby="form-dialog-title" style={{}}>
      <DialogTitle id="form-dialog-title">Save Score</DialogTitle>
      <Divider variant="middle" />
        <DialogContent>
       
           <List className={classes.margin}>
           {Object.keys(props.results).map((key,id) =>
                 <ListItem key={id}>
                   <ListItemText primary={key} />
                   <ListItemText primary={props.results.getItem(key)} />
                </ListItem>
               )}
             </List>
                
            
        </DialogContent>
        <DialogActions>
          
          <Button onClick={props.toggleView} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
