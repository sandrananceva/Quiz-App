import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(6, 1),
        marginTop:'30px',
        height:'55vh'
    },
    button: {
        margin: theme.spacing(1),
        width: '230px'
    },
    bottom: {
        align:'left'
    },
    gridspace:{
        marginTop: '15px'
    },
    nextbtn: {
        marginTop: '10px',
        marginBottom: '25px'
      
    }
}));
export const QuizPage = (props) => {

    const classes = useStyles();


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Paper className={classes.root}>

                    <Typography variant="h5" component="h2" gutterBottom>
                        {props.showQuestion.question}
                    </Typography>
                    <Divider variant="middle" />

                    <Grid container spacing={2} direction="column" alignItems="center" className={classes.gridspace}>
                        <Grid item xs>
                            <Button className={classes.button} onClick={props.toggleAnswer.bind(this, props.showQuestion.opt1, props.showQuestion.answer )} variant="contained" color={props.showQuestion.opt1===props.selectedAns ? "default":"primary"}>
                                {props.showQuestion.opt1}
                            </Button>
                            <Button className={classes.button} onClick={props.toggleAnswer.bind(this, props.showQuestion.opt2, props.showQuestion.answer)} variant="contained" color={props.showQuestion.opt2===props.selectedAns ? "default":"primary"}>
                                {props.showQuestion.opt2}
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button className={classes.button} onClick={props.toggleAnswer.bind(this, props.showQuestion.opt3, props.showQuestion.answer)} variant="contained" color={props.showQuestion.opt3===props.selectedAns ? "default":"primary"}>
                                {props.showQuestion.opt3}
                            </Button>
                            <Button className={classes.button} onClick={props.toggleAnswer.bind(this, props.showQuestion.opt4, props.showQuestion.answer)} variant="contained" color={props.showQuestion.opt4===props.selectedAns ? "default":"primary"}>
                                {props.showQuestion.opt4}
                            </Button>
                        </Grid>


                    </Grid>
                    {props.showError ?
                        <Typography variant="overline" display="block" color="error" gutterBottom>
                            *You must select one
                        </Typography> : null}

                    <Button className={classes.nextbtn} onClick={props.toggleNext} variant="contained" color="secondary" endIcon={<ArrowForwardIcon/>}>Next</Button>
                    <Divider variant="middle" />
                    <Typography className={classes.bottom} variant="overline" display="block" gutterBottom>
                        Question {props.viewCounter} of 5
                </Typography>
                </Paper>
            </Container>
        </React.Fragment>
    )
}