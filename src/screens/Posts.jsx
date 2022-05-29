import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import BasicCard from '../components/Card';
import { Grid } from '@mui/material';

function Posts() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/`)
        .then(res => {
          setPost(res.data)
        })
    }
    getPosts();
  }, [])
  return (

    <>
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1>Posts</h1>

          {post.length
            ? post.map((item, index) => <BasicCard key={index} text={item.title} />)
            : <Skeleton variant="rectangular" width={"100%"} height={400} />}
        </Grid>
      </Grid>
    </>
  )
}

export default Posts