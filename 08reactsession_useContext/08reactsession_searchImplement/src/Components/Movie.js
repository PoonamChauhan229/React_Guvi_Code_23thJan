import React, { useState } from 'react'
import Counter from './Counter'
import '../App.css'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import Card from '@mui/material/Card';
const Movie = ({name,poster,rating,summary,id}) => {
  // console.log(name,poster,rating,summary)// typing

  const navigate=useNavigate();


  const ratingStyle={
    // Conditional Styling
   color: rating>8?"green":"red",
   fontSize:"17px"

  }
  // Toggle Summary 1st way

  const [show,setShow]=useState(false)

  // const toggleSummary={
  //   display:show?"block":'none'
  // }
  return (


    // 
      <>
      
    <Card sx={{marginBottom: "25px", width: "317px"}}>
      <CardHeader      
      style={{padding:"0px"}}
        avatar={
          <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe">
            {name.slice(0,1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings"
          onClick={()=>{navigate(`/movies/${id}`)}}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={<span style={{fontSize:"17px",padding:"0px"}}>{name}</span>}
        subheader={
          <Button aria-label="settings"
          style={ratingStyle}
          startIcon={<StarIcon/>}>
            {rating}
          </Button>
        }
      />
      <CardMedia
        component="img"
        height="320"
        image={poster}
        alt={name}
        style={{ objectFit: "fill" }}
      />
      
      {/* Icon  */}
      <CardActions disableSpacing>
        <Counter/>
         
        <IconButton aria-label="share" 
        onClick={()=>setShow(!show)}>
          {show?<KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/>}
        </IconButton> 
       
      </CardActions>
      {show && <CardContent>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>}
    </Card>
    </>
  )
}

export default Movie;
