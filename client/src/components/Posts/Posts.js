import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import {useSelector} from "react-redux";
const Posts=() => {

    const post=useSelector((state)=>
       state.posts 
    )
    console.log(post);
    const classes = useStyles();
    return (
        <>
        <h1>Posts</h1>
        <Post/>
        </>
    );
}
export default Posts;