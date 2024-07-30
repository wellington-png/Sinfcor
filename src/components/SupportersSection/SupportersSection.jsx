import React from 'react';
import { Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionContainer from '../SectionContainer/SectionContainer';
import FapepiLogo from '../../assets/logo-fapepi.png';
import IfpiVerticalLogo from '../../assets/Logo-IFPI-Corrente-Vertical.png';

const supporters = [
    { src: FapepiLogo, alt: 'Fapepi' },
    { src: IfpiVerticalLogo, alt: 'IFPI' },
];

const SupportersSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <SectionContainer title='Apoio' description='Texto muito massa sobre como estão nos apoiando'>
            <Grid container spacing={5} justifyContent="center" alignItems="center" sx={{ marginTop: '2rem' }}>
                {supporters.map((partner, index) => (
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
                                sx={{ maxWidth: '100%', height: 'auto', maxHeight: 150 }}
                            />
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </SectionContainer>
    )
};

export default SupportersSection;