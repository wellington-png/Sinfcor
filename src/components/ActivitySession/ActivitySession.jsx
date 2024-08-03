import React, { useState } from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import ActivityCard from '../ActivityCard/ActivityCard';
import ActivityModal from '../ActivityModal/ActivityModal';
import activities from './data';


const ActivitySession = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleCardClick = (activity) => {
        setSelectedActivity(activity);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedActivity(null);
    };

    return (
        <SectionContainer title='Atividades'>
            <Grid 
                container 
                spacing={5} 
                justifyContent={isMobile ? "center" : "flex-start"} 
                alignItems="center" 
                sx={{ marginTop: '2rem' }}
            >
                {activities.map(activity => (
                    <Grid 
                        item 
                        xs={12} 
                        sm={6} 
                        md={4} 
                        lg={4} 
                        key={activity.id} 
                        display="flex" 
                        justifyContent="center"
                    >
                        <ActivityCard 
                            title={activity.title} 
                            description={activity.description} 
                            image={activity.image}
                            date={activity.date}
                            onClick={() => handleCardClick(activity)}
                        />
                    </Grid>
                ))}
            </Grid>
            {selectedActivity && (
                <ActivityModal 
                    open={modalOpen} 
                    onClose={handleCloseModal} 
                    activity={selectedActivity}
                />
            )}
        </SectionContainer>
    );
};

export default ActivitySession;
