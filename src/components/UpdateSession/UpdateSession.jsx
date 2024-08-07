import React from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import { Grid } from '@mui/material';

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
