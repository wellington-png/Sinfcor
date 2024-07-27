import React from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import ActivityCard from '../ActivityCard/ActivityCard';

const activities = [
    { id: 1, title: 'Atividade 1', description: 'Descrição da atividade 1' },
    { id: 2, title: 'Atividade 2', description: 'Descrição da atividade 2' },
    { id: 3, title: 'Atividade 3', description: 'Descrição da atividade 3' },
    { id: 4, title: 'Atividade 4', description: 'Descrição da atividade 4' },
];

const UpdateSession = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <SectionContainer title='Atualizações' description='Veja as últimas atualizações do evento e fique por dentro de tudo.'>
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
                        <ActivityCard title={activity.title} description={activity.description} />
                    </Grid>
                ))}
            </Grid>
        </SectionContainer>
    );
};

export default UpdateSession;
