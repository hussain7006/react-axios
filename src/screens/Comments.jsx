import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import { Grid } from '@mui/material';
import BasicCard from '../components/Card';


function Comments() {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/`)
        .then(res => {
          setComments(res.data)
        })
    }
    getComments();
  }, [])

  return (


    <Grid container>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <h1>Comments</h1>

        {comments.length
          ? comments.map((item, index) => <BasicCard key={index} text={item.body} />)
          : <Skeleton variant="rectangular" width={"100%"} height={400} />}
      </Grid>
    </Grid>


  )
}

export default Comments
