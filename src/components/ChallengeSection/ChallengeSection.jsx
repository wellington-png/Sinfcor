import { Button, Grid, Typography, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import developerImage from '../../assets/developer.svg';

const ChallengeSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                minHeight: '40vh',
                backgroundColor: '#EEE1FF',
                padding: '2rem',
            }}
        >
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {!isMobile && (
                    <Grid item md={6}>
                        <Box 
                            component="img" 
                            src={developerImage} 
                            alt="Developer Image" 
                            sx={{ 
                                width: '100%', 
                                maxWidth: 400 
                            }}
                        />
                    </Grid>
                )}
                <Grid item xs={12} md={6} sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Que tal um desafio?
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Gosta de desenvolver soluções?
                        <br />
                        Venha participar do nosso HACKATHON!
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        size="large" 
                        sx={{ 
                            backgroundColor: '#FF007F', 
                            mt: 2 
                        }}
                    >
                        Inscrições
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ChallengeSection;
