import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SpotifyLogo from '../../assets/sinfcor/image 4.png';
import GoogleLogo from '../../assets/sinfcor/image 5.png';
import StripeLogo from '../../assets/sinfcor/image 14.png';
import YoutubeLogo from '../../assets/sinfcor/image 15.png';
import MicrosoftLogo from '../../assets/sinfcor/image 16.png';
import MediumLogo from '../../assets/sinfcor/image 17.png';
import ZoomLogo from '../../assets/sinfcor/image 18.png';
import UberLogo from '../../assets/sinfcor/image 19.png';
import GrabLogo from '../../assets/sinfcor/image 20.png';

const partners = [
    { src: SpotifyLogo, alt: 'Spotify' },
    { src: GoogleLogo, alt: 'Google' },
    { src: StripeLogo, alt: 'Stripe' },
    { src: YoutubeLogo, alt: 'Youtube' },
    { src: MicrosoftLogo, alt: 'Microsoft' },
    { src: MediumLogo, alt: 'Medium' },
    { src: ZoomLogo, alt: 'Zoom' },
    { src: UberLogo, alt: 'Uber' },
    { src: GrabLogo, alt: 'Grab' },
];

const PartnersSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

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
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Box
                                component="img"
                                src={partner.src}
                                alt={partner.alt}
                                sx={{ maxWidth: '100%', height: 'auto', maxHeight: 80 }}
                            />
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PartnersSection;
