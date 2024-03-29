import React, { useState,useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { createPost,updatePost } from "../../actions/posts";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
import FileBase from 'react-file-base64';
import Post from "../Posts/Post/Post";

const Form = ({ currentId, setCurrentId }) => {
    const post=useSelector((state)=>currentId?state.posts.find((p)=> p._id===currentId):null);
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });

    useEffect(()=>{ if (post) setPostData(post);},[post]);
     const dispatch=useDispatch();
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentId === 0) {
          dispatch(createPost(postData));
          clear();
        } else {
          dispatch(updatePost(currentId, postData));
          clear();
        }
      };
    const clear = () => { 

        setCurrentId(null);
        setPostData({
            creator: "",
            title: "",
            message: "",
            tags: "",
            selectedFile: "",
        })

    };
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId?'Editing':'Creating'} a Memory</Typography>
                <TextField name="creator" variant="outlined" label="creator" fullWidth value={postData.creator} onChange={(e) =>setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) =>setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) =>setPostData({ ...postData, message: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) =>setPostData({ ...postData, tags: e.target.value })}/>
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/>
            </div>
            <Button className={classes.buttonSubmit} variant="contained" size="large" color="primary" type="submit" fullWidth >Submit</Button>
            <Button  variant="contained" size="small" color="secondary" onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    );
};
export default Form;
