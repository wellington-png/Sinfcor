import React from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import imagem1 from '../../assets/what_1.png';
import imagem2 from '../../assets/what_2.png';


const AboutsSession = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));

  return (
    <SectionContainer title='Sobre'>
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
                  />
                </Box>
              </Grid>
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
                    alt="our office 1"
                    src={imagem2}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid xs={12} md={6} lg={5}>
              <Box>
                <Typography variant="h2" sx={{ mb: 3, fontFamily: "Montserrat", }}>
                  O que é <strong style={{
                    color: '#FFFFFF',
                    // #5324c6 #840fbe
                    background: 'linear-gradient(90deg, #5324c6 0%, #840fbe 100%)', 
                    transform: 'rotate(-15deg)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',                              
                  }}>SINFCOR</strong>?
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: theme.palette.mode === "Montserrat" ? 'text.secondary' : 'common.white',
                  }}
                >
                  O Simpósio de Informática de Corrente Piauí é um evento imperdível para os apaixonados por tecnologia. Com uma programação rica em minicursos sobre tecnologias emergentes como inteligência artificial e blockchain, palestras sobre inovação e empreendedorismo digital, além de atividades práticas como hackathons e competições de programação, oferece uma oportunidade única para expandir conhecimentos, aprimorar habilidades e conectar-se com outros entusiastas. Venha participar!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </SectionContainer>
  );
};

export default AboutsSession;
