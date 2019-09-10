import React from 'react'
import Container from '@material-ui/core/Container';
import { Grid, GridList, GridListTile } from '@material-ui/core';
import ResturantItem from './ResturantItem/ResturantItem';


const ResturantsList = (props)=>{
   const resturantsList = props.resturants.map(
       (item) => {
           console.log(item)
           return <GridListTile><ResturantItem item = {item} key = {item._id}/></GridListTile>
       }
   )
    return(
        <Grid>
            <GridList cols = '2' cellHeight ='800px' spacing={20}>
            {resturantsList}
            </GridList>
        </Grid>
    );
}

export default ResturantsList;