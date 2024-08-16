import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import palestraImage from '../../images/palestra.jpeg';
import ActivityCard from './ActivityCard';
import ActivityModal from './ActivityModal';
import './styles.css';

const activities = [
  {
    id: 1,
    title: 'Corrente Informatics Symposium',
    description: 'Detailed description of the symposium, including objectives, target audience, and speakers.',
    image: palestraImage,
    date: '15/08/2024',
    location: 'IFPI - Corrente Campus ',
    speakers: ['Prof. Dr. João Silva', 'Profa. Dra. Maria Souza'],
    registration: 'https://registration-link',
    modals: [
      { title: 'Modal 1', description: 'Description for modal 1', image: 'path/to/modal1-image.jpg' },
      { title: 'Modal 2', description: 'Description for modal 2', image: 'path/to/modal2-image.jpg' },
      { title: 'Modal 3', description: 'Description for modal 3', image: 'path/to/modal3-image.jpg' },
      { title: 'Modal 4', description: 'Description for modal 4', image: 'path/to/modal4-image.jpg' },
      { title: 'Modal 5', description: 'Description for modal 5', image: 'path/to/modal5-image.jpg' },
      { title: 'Modal 6', description: 'Description for modal 6', image: 'path/to/modal6-image.jpg' },
    ]
  },
  {
    id: 2,
    title: 'Tech Conference 2024',
    description: 'An annual tech conference focusing on emerging technologies.',
    image: 'path/to/image2.jpg',
    modals: [
      { title: 'Modal 1', description: 'Description for modal 1', image: 'path/to/modal1-image.jpg' },
      { title: 'Modal 2', description: 'Description for modal 2', image: 'path/to/modal2-image.jpg' },
      { title: 'Modal 3', description: 'Description for modal 3', image: 'path/to/modal3-image.jpg' },
      { title: 'Modal 4', description: 'Description for modal 4', image: 'path/to/modal4-image.jpg' },
      { title: 'Modal 5', description: 'Description for modal 5', image: 'path/to/modal5-image.jpg' },
      { title: 'Modal 6', description: 'Description for modal 6', image: 'path/to/modal6-image.jpg' },
    ]
  },
  {
    id: 3,
    title: 'AI and Future Trends',
    description: 'Exploring the future of AI and its impact on various industries.',
    image: 'path/to/image3.jpg',
    modals: [
      { title: 'Modal 1', description: 'Description for modal 1', image: 'path/to/modal1-image.jpg' },
      { title: 'Modal 2', description: 'Description for modal 2', image: 'path/to/modal2-image.jpg' },
      { title: 'Modal 3', description: 'Description for modal 3', image: 'path/to/modal3-image.jpg' },
      { title: 'Modal 4', description: 'Description for modal 4', image: 'path/to/modal4-image.jpg' },
      { title: 'Modal 5', description: 'Description for modal 5', image: 'path/to/modal5-image.jpg' },
      { title: 'Modal 6', description: 'Description for modal 6', image: 'path/to/modal6-image.jpg' },
    ]
  },
  {
    id: 4,
    title: 'Innovative Technologies Expo',
    description: 'A showcase of the latest innovations in technology.',
    image: 'path/to/image4.jpg',
    modals: [
      { title: 'Modal 1', description: 'Description for modal 1', image: 'path/to/modal1-image.jpg' },
      { title: 'Modal 2', description: 'Description for modal 2', image: 'path/to/modal2-image.jpg' },
      { title: 'Modal 3', description: 'Description for modal 3', image: 'path/to/modal3-image.jpg' },
      { title: 'Modal 4', description: 'Description for modal 4', image: 'path/to/modal4-image.jpg' },
      { title: 'Modal 5', description: 'Description for modal 5', image: 'path/to/modal5-image.jpg' },
      { title: 'Modal 6', description: 'Description for modal 6', image: 'path/to/modal6-image.jpg' },
    ]
  },
  {
    id: 5,
    title: 'Cybersecurity Seminar',
    description: 'A seminar on the latest trends and threats in cybersecurity.',
    image: 'path/to/image5.jpg',
    modals: [
      { title: 'Modal 1', description: 'Description for modal 1', image: 'path/to/modal1-image.jpg' },
      { title: 'Modal 2', description: 'Description for modal 2', image: 'path/to/modal2-image.jpg' },
      { title: 'Modal 3', description: 'Description for modal 3', image: 'path/to/modal3-image.jpg' },
      { title: 'Modal 4', description: 'Description for modal 4', image: 'path/to/modal4-image.jpg' },
      { title: 'Modal 5', description: 'Description for modal 5', image: 'path/to/modal5-image.jpg' },
      { title: 'Modal 6', description: 'Description for modal 6', image: 'path/to/modal6-image.jpg' },
    ]
  },
  {
    id: 6,
    title: 'Future of Work Forum',
    description: 'Discussing the future of work and remote work trends.',
    image: 'path/to/image6.jpg',
    modals: [
      { title: 'Modal 1', description: 'Description for modal 1', image: 'path/to/modal1-image.jpg' },
      { title: 'Modal 2', description: 'Description for modal 2', image: 'path/to/modal2-image.jpg' },
      { title: 'Modal 3', description: 'Description for modal 3', image: 'path/to/modal3-image.jpg' },
      { title: 'Modal 4', description: 'Description for modal 4', image: 'path/to/modal4-image.jpg' },
      { title: 'Modal 5', description: 'Description for modal 5', image: 'path/to/modal5-image.jpg' },
      { title: 'Modal 6', description: 'Description for modal 6', image: 'path/to/modal6-image.jpg' },
    ]
  },
];

const ActivitiesSection = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedModal, setSelectedModal] = useState(null);

  const handleOpenModal = (activityId) => {
    const activity = activities.find((a) => a.id === activityId);
    setSelectedActivity(activity);
    setSelectedModal(activity.modals[0]?.title); // Assume opening the first modal
  };

  const handleCloseModal = () => {
    setSelectedActivity(null);
    setSelectedModal(null);
  };

  return (
    <Container maxWidth={false} className="activities-container">
      <Typography variant="h4" className="activities-title" gutterBottom>
        Atividades
      </Typography>
      <Grid container spacing={2}>
        {activities.slice(0, 6).map((activity) => (
          <Grid item xs={12} sm={6} md={4} key={activity.id}>
            <ActivityCard activity={activity} onOpenModal={handleOpenModal} />
          </Grid>
        ))}
      </Grid>
      <ActivityModal
        open={!!selectedActivity}
        activity={selectedActivity}
        modal={selectedModal}
        onClose={handleCloseModal}
      />
    </Container>
  );
};

export default ActivitiesSection;