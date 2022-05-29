import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import { Grid } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos/`)
        .then(res => {
          setPhotos(res.data)
          console.log(res.data)
        })
    }
    getPhotos()
  }, [])

  return (
    <Grid container>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <h1>Photos</h1>
      
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {photos.length ? 
          photos.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          )): <Skeleton variant="rectangular" width={"100%"} height={400} />}
        </ImageList>
      </Grid>
    </Grid>
  )
}

export default Photos