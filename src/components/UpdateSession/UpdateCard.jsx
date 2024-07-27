import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import bgImage from '../../assets/rear-view-programmer-working-all-night-long.jpg';

export default function UpdateCard({ title, description }) {
  return (
    <Card sx={{ borderRadius: 5, width: '100%', maxWidth: '500px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={bgImage}
          alt="activity image"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
