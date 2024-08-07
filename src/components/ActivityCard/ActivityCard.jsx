import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PropTypes from 'prop-types';
import bgImage from '../../assets/rear-view-programmer-working-all-night-long.jpg';

const ActivityCard = ({ title, description, image, date, hora, onClick }) => {
  return (
    <Card sx={{ borderRadius: 5, textAlign: 'left', width: '460px', height: '420px' }}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="200"
          image={bgImage}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" color='#242565'>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {date} - {hora}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ActivityCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired, 
  onClick: PropTypes.func
};

export default ActivityCard;
