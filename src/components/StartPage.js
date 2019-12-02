import React from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(8),
        marginTop: '30px',
        height: '55vh'
    },
    button: {
        marginTop: '30px',
        width: '230px'

    },
    headline: {
        marginTop: '30px'
    }
}));

export const StartPage = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Paper className={classes.root}>

                    <Typography className={classes.headline} variant="h3" component="h2" gutterBottom>
                        Front End Developer Quiz
                    </Typography>
                    <Divider variant="middle" />
                    <Button className={classes.button} variant="contained" color="secondary" size="large" onClick={props.togglePlay}>
                        Start
            </Button>

                </Paper>
            </Container>
        </React.Fragment>
    )
}