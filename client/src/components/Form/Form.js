import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { TextField, Button, Typography, Paper, } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';

import makeStyles  from './styles'
import { createPost, updatePost } from '../../actions/posts';

const Form = () => {
    const styling = makeStyles()
    const dispatch = useDispatch();
    // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        dispatch(createPost(postData))
    }  
    const clear = () => {
        // setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
      };

    return (
        <Paper className={styling.paper}>
            <form autoComplete='off' noValidate className={`${styling.root} ${styling.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'>New Post</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})}/>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>
            <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})}/>
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value})}/>
            <div className={styling.fileInput}>
                <FileBase type = "file" multiple={false} onDone={({base64}) => ({ ...postData, selectedFile: base64})} />
            </div>
            <Button className={styling.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Let the Galaxy hear your thoughts</Button>
            <Button variant="contained" color="secondary" size="small" type="submit" onClick={clear} fullWidth>Alderaan my thoughts</Button>
            </form>
        </Paper>
    )
}

export default Form