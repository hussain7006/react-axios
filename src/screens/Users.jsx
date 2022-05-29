import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import { Grid } from '@mui/material';
import BasicCard from '../components/Card';

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/`)
        .then(res => {
          setUsers(res.data)
        })
    }
    getUsers();
  }, [])

  return (
    <Grid container>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <h1>Albums</h1>

        {users.length
          ? users.map((item, index) => <BasicCard key={index} text={item.name} />)
          : <Skeleton variant="rectangular" width={"100%"} height={400} />}
      </Grid>
    </Grid>
  )
}

export default Users