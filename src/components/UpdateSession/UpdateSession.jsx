import React from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import { Grid } from '@mui/material';
import UpdateCard from './UpdateCard';

const activities = [
    { id: 1, title: 'Palestra', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica.' },
    { id: 2, title: 'Minicurso', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica.' },
    { id: 3, title: 'Jogos', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica.' },
    // { id: 4, title: 'Hackathon', description: 'Lizards are a widespread group of  squamate reptiles, with over 6,000species, ranging across all continents except Antarctica.' },
];

const UpdateSession = () => {

    return (
        <SectionContainer minHeight='0vh' title='Atualizações' description='Veja as últimas atualizações do evento e fique por dentro de tudo.'>
            <Grid 
                container 
                spacing={5} 
                justifyContent="center" 
                alignItems="center" 
                sx={{ marginTop: '2rem' }}
            >
            </Grid>
            {/* <UpdateCard/> */}
        </SectionContainer>
    );
};

export default UpdateSession;
