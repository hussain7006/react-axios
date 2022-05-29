import React, { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import { Grid } from '@mui/material';
import BasicCard from '../components/Card';

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbums = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/albums/`)
        .then(res => {
          setAlbums(res.data)
        })
    }
    getAlbums();
  }, [])

  return (
    <Grid container>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <h1>Albums</h1>

        {albums.length
          ? albums.map((item, index) => <BasicCard key={index} text={item.title} />)
          : <Skeleton variant="rectangular" width={"100%"} height={400} />}
      </Grid>
    </Grid>
  )
}

export default Albums
