import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import bgImage from '../../assets/rear-view-programmer-working-all-night-long.jpg';


export default function ActivityCard() {
  return (
    <Card sx={{ borderRadius: 5, textAlign: 'left', }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={bgImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}