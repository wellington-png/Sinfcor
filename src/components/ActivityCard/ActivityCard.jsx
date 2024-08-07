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
    <Card sx={{ borderRadius: 5, textAlign: 'left', flex: 1, height: 320 }}>
      <CardActionArea onClick={onClick} sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          height="200"
          image={bgImage}
          alt={title}
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 'calc(100% - 200px)' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt accusamus, excepturi laboriosam consequatur ex fuga minima voluptate labore. Pariatur eos ratione sequi dolorem delectus, placeat fugiat accusantium sit culpa.
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
