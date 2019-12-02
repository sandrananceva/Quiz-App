import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 300,
  },
}));

export const AddScore = (props) => {
  const classes = useStyles();

  return (
    <div>

      <Dialog open={props.showPopup} aria-labelledby="form-dialog-title">
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Enter Nickname"
            type="input"
            onChange={props.handleInput}
            className={classes.textField}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.toggleSave} color="primary">
            Save  
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
