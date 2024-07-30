import React from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import UpdateCard from './UpdateCard';

const activities = [
    { id: 1, title: 'Palestra', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica.' },
    { id: 2, title: 'Minicurso', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica.' },
    { id: 3, title: 'Jogos', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica.' },
    { id: 4, title: 'Hackathon', description: 'Lizards are a widespread group of  squamate reptiles, with over 6,000species, ranging across all continents except Antarctica.' },
];

const UpdateSession = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <SectionContainer title='Atualizações' description='Veja as últimas atualizações do evento e fique por dentro de tudo.'>
            <Grid 
                container 
                spacing={5} 
                justifyContent="center" 
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
                        <UpdateCard title={activity.title} description={activity.description} />
                    </Grid>
                ))}
            </Grid>
        </SectionContainer>
    );
};

export default UpdateSession;