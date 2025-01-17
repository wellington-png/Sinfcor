import React, { useState } from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import { Grid, useMediaQuery, useTheme, Button } from '@mui/material';
import ActivityCard from '../ActivityCard/ActivityCard';
import ActivityModal from '../ActivityModal/ActivityModal';
import activities from './data';

const ActivitySession = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);
    const [showingAll, setShowingAll] = useState(false);

    const handleCardClick = (activity) => {
        setSelectedActivity(activity);
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedActivity(null);
    };
    const handleLoadMoreOrLess = () => {
        if (showingAll) {
            setVisibleCount(6);
        } else {
            setVisibleCount(activities.length);
        }
        setShowingAll(!showingAll);
    };

    return (
        <SectionContainer title='Atividades'>
            <Grid
                container
                spacing={5}
                justifyContent={isMobile ? "center" : "flex-start"}
                alignItems="center"
                sx={{ marginTop: '2rem', padding: '0 1rem' }}
            >
                {activities.slice(0, visibleCount).map(activity => (
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
                            hora={activity.hora}
                            onClick={() => handleCardClick(activity)}
                        />
                    </Grid>
                ))}
            </Grid>
            {activities.length > 6 && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLoadMoreOrLess}
                    sx={{
                        width: '20%',
                        minWidth: '200px',
                        whiteSpace: "nowrap",
                        backgroundColor: '#F5167E',
                        marginTop: '2rem',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        '&:hover': {
                            backgroundColor: '#F5167Ec1',
                        }
                    }}
                >
                    {showingAll ? 'Ver Menos' : 'Ver Mais'}
                </Button>
            )}
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
