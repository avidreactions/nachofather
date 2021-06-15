import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import vader from '../files/memes/nacho.jpg';

const useStyles = makeStyles(theme => ({
    mainRoot: {
        margin: 'auto',
        display: 'inline-block',
    },
}))

const Main = () => {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.mainRoot}>
                <img src={vader} alt="Vader" />
            </div>
        </div>
    )
}

export default Main