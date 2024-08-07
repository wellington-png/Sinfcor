import React from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import { Box, Container, Grid, Typography, useMediaQuery, useTheme, Button } from '@mui/material';
import imagem1 from '../../assets/hackathon/hackathon.jpg';

const HackathonSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.only('md'));

    return (
        <SectionContainer title='Hackathon'>
            <Grid
                container
                justifyContent={isMobile ? "center" : isMedium ? "center" : "flex-start"}
                alignItems="center"
                sx={{ marginTop: '2rem' }}
            >
                <Container
                    sx={{
                        py: { xs: 10, md: 15 },
                        textAlign: { xs: 'center', md: 'center', lg: 'unset' },
                        display: 'flex',
                        justifyContent: isMedium ? 'center' : 'unset',
                    }}
                >
                    <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start">
                        <Grid xs={12} md={6} lg={5}>
                            <Box>
                                <Typography variant="h2" sx={{ mb: 3, fontFamily: "Montserrat", fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
                                    O que é <strong style={{
                                        color: '#FFFFFF',
                                        background: 'linear-gradient(90deg, #5324c6 0%, #840fbe 100%)',
                                        transform: 'rotate(-15deg)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}>HACKATHON</strong>?
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>
                                    Crie soluções inovadoras para problemas do mundo real! Um hackathon é um evento onde pessoas de diferentes áreas se reúnem para criar soluções inovadoras para problemas do mundo real em um tempo limitado.
                                    <br />
                                    <br />
                                    O melhor de tudo? Qualquer pessoa pode participar! Não é preciso ser um programador experiente para fazer a diferença. Com ferramentas intuitivas e criatividade, você pode desenvolver ideias incríveis e transformar o mundo à sua volta.
                                    <br />
                                    <br />
                                    <Button
                                        href='https://forms.gle/tFV26rTNgjMwMaCW6'
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        sx={{
                                            backgroundColor: '#FF007F',
                                        }}
                                    >
                                        Inscrições
                                    </Button>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid container xs={12} md={6} lg={7} alignItems="center" sx={{ pr: { md: 7 } }}>
                            <Grid xs={6}>
                                <Box
                                    sx={{
                                        display: {
                                            xs: 'none',
                                            sm: 'block',
                                        },
                                    }}
                                >
                                    <img
                                        alt="our office 2"
                                        src={imagem1}
                                        style={{ height: "400px", borderRadius: '25px', margin: '2rem 4rem' }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>

                    </Grid>
                </Container>
            </Grid>
        </SectionContainer>
    );
};

export default HackathonSection;