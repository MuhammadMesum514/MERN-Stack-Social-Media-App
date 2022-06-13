import React from "react";
import {Card , CardActions , CardContent , CardMedia , Button , Typography } from '@material-ui/core';
// import ThumbUpAltIcon from'@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete' ;
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from "./styles";

const Post=() => {
    
    const classes=useStyles();
    return (
        <Card className={classes.card}>
        <h1>Post Here </h1>
        </Card>
    );
}
export default Post;