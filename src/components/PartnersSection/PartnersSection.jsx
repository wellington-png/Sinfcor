import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SpotifyLogo from '../../assets/sinfcor/image 14.png';
// import GoogleLogo from '../../assets/google-logo.png';
// import StripeLogo from '../../assets/stripe-logo.png';
// import YoutubeLogo from '../../assets/youtube-logo.png';
// import MicrosoftLogo from '../../assets/microsoft-logo.png';
// import MediumLogo from '../../assets/medium-logo.png';
// import ZoomLogo from '../../assets/zoom-logo.png';
// import UberLogo from '../../assets/uber-logo.png';
// import GrabLogo from '../../assets/grab-logo.png';

const partners = [
    { src: SpotifyLogo, alt: 'Spotify' },
    { src: SpotifyLogo, alt: 'Google' },
    { src: SpotifyLogo, alt: 'Stripe' },
    { src: SpotifyLogo, alt: 'Youtube' },
    { src: SpotifyLogo, alt: 'Microsoft' },
    { src: SpotifyLogo, alt: 'Medium' },
    { src: SpotifyLogo, alt: 'Zoom' },
    { src: SpotifyLogo, alt: 'Uber' },
    { src: SpotifyLogo, alt: 'Grab' },
];

const PartnersSection = () => {
    return (
        <Container maxWidth="xl" sx={{ padding: '2rem 0', textAlign: 'center', minHeight: '60vh' }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Parceiros
            </Typography>
            <Typography variant="body1" gutterBottom>
                Texto muito massa sobre como estão nos apoiando
            </Typography>
            <Grid container spacing={5} justifyContent="center" alignItems="center" sx={{ marginTop: '2rem' }}>
                {partners.map((partner, index) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src={partner.src}
                            alt={partner.alt}
                            sx={{ maxWidth: '100%', height: 'auto', maxHeight: 80 }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PartnersSection;
