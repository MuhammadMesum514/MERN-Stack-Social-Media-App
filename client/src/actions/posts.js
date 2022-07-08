import * as api from '../api';

//action creators
//* fetch All posts Action

export const getPosts = () => async(dispatch) => {

    try {
        const {data} =await api.fetchPosts();
        dispatch({type: 'FETCH_ALL',payload:data});
    } 
    catch (error) {
        console.log(error.message);        
    }
}

//* create a new post Action

export const createPost = (Post) => async(dispatch) => {

    try {
        const {data} =await api.createPost(Post);
        dispatch({type: 'CREATE',payload:data});
    } 
    catch (error) {
        console.log(error.message);        
    }
}

//* update post Action
export const updatePost = (id, post) => async (dispatch) => {
    try {
        console.table(id);   
        
      const { data } = await api.updatePost(id, post);
        console.log(data);
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };