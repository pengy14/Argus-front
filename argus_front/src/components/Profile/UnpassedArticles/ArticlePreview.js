import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Stepper, Step, StepLabel } from '@material-ui/core'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'


const styles = theme => ({
    root: {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 5,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "60%"
    },
    title: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2,
        color: theme.palette.primary.dark
    },
    step: {
        width: '90%',
    },
})

export default withStyles(styles)(({article, classes}) => {
    let activeStep = 1
    let errors = [false, false, false, false]
    const steps = ['作者发布文章', '主编分配编辑', '编辑审稿','主编终审']
    if(article.editor.editor1){
        activeStep = 2
        if(article.editor.editor1.decision!=="checking" && article.editor.editor2.decision!=="checking"){
            activeStep = 3
        }
    }
    if(article.stat==="reject"){
        errors[3]=true
        activeStep = 3
    }
    return (
        <Grid item className={classes.root}>
        <Link to={`a${article.id}`} >
        <Typography variant="h5" color="default" className={classes.title}>
            {article.title}
        </Typography>
        </Link>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>查看文章审核状态:</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div className={classes.step}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            return (
                            <Step key={label} >
                                <StepLabel error={errors[index]}>{label}</StepLabel>
                            </Step>
                            );
                        })}
                    </Stepper>
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </Grid>
    );
})

