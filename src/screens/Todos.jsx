import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import { Grid } from '@mui/material';
import BasicCard from '../components/Card';


function Todos() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/todos/`)
        .then(res => {
          setTodos(res.data)
        })
    }
    getTodos();
  }, [])


  return (
    <Grid container>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <h1>Todos</h1>

        {todos.length
          ? todos.map((item, index) => <BasicCard key={index} text={item.title} />)
          : <Skeleton variant="rectangular" width={"100%"} height={400} />}
      </Grid>
    </Grid>
  )
}

export default Todos