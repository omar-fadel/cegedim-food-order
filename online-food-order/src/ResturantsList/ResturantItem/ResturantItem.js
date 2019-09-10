import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Paper } from '@material-ui/core';
import classes from './ResturantItem.module.css'
import { styled } from '@material-ui/styles';

const HeaderStyled = styled(Typography)({
  color : 'primary',
  marginBottom : '5px',
  marginTop: '5px'
});


const ResturantItem = (props) => {
    const styles = {
        display: 'block',
        margin: 'auto'
    }
    return(
        <div>
                <img src = {props.item['picture']} style = {styles} />
                <HeaderStyled variant='h3' className={classes.cardHeader} color ='primary'>{props.item['name']}</HeaderStyled>
                <Typography variant='h6' >{props.item['company']}</Typography>
                <Typography variant='body1'>{props.item['about']}</Typography>
        </div>
    );
}   

export default ResturantItem;