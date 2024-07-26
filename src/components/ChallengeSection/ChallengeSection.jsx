import { Button, Grid, Typography, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import developerImage from '../../assets/developer.svg'; 
import bgImage from '../../assets/rear-view-programmer-working-all-night-long.jpg'; 

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
                position: 'relative',
                overflow: 'hidden',
                padding: '2rem',
                backgroundColor: '#EEE1FF',
                '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(5px)',
                    zIndex: 1,
                    backgroundAttachment: 'fixed',
                },
            }}
        >
            <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="center"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    backgroundColor: "transparent",
                }}
            >
                {!isMobile && (
                    <Grid item md={6}>
                        <Box
                            component="img"
                            src={developerImage}
                            alt="Developer Image"
                            sx={{
                                width: '100%',
                                maxWidth: 400,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 3,
                                opacity: 0.5,
                            }}
                        />
                    </Grid>
                )}
                <Grid item xs={12} md={6} sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{color: "#fff", fontWeight: 'bold'}}>
                        Que tal um desafio?
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{color: "#fff"}}>
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
                            mt: 2,
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
