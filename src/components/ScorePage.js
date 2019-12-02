import React from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(6, 1),
        marginTop:'30px',
        height:'55vh'
    },
    button: {
        marginTop: '30px',
        
    },
    headline: {
        marginTop: '60px'
    },
    buttonsave:{
        marginTop: '15px'
    }
}));

export const ScorePage = (props) => {
    const classes = useStyles();

    return( 
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
            <Paper className={classes.root}>
            <Typography className={classes.headline} variant="h4" component="h2" gutterBottom>
                 Correct answers {props.resultScore} out of 5!
            </Typography>
            <Divider variant="middle" />
            <Grid container spacing={2} direction="column" alignItems="center" >
                <Button className={classes.button} onClick={props.toggleStartPage} variant="outlined" color="secondary">Back to Homepage</Button>
                <Button className={classes.buttonsave} onClick={props.togglePopup} variant="outlined" color="default">Save Score</Button>
                <Button className={classes.buttonsave} onClick={props.toggleView} variant="outlined" color="primary">View Score</Button>

            </Grid>
            
            

            </Paper>
            </Container>
        </React.Fragment>
    )
}