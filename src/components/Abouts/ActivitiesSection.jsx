import React from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import imagem1 from '../../assets/what_1.png';
import imagem2 from '../../assets/what_2.png';

const AboutsSession = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <SectionContainer title='Sobre'>
      <Grid
        container
        spacing={5}
        justifyContent={isMobile ? "center" : "flex-start"}
        alignItems="center"
        sx={{ marginTop: '2rem' }}
      >

        <Container
          sx={{
            py: { xs: 10, md: 15 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start">
          <Grid container xs={12} md={6} lg={7} alignItems="center" sx={{ pr: { md: 7 } }}>
                <Grid xs={6}>
                  <Box>
                    <img
                      alt="our office 2"
                      src={imagem1}
                      ratio="1/1"
                    />
                  </Box>
                </Grid>

                <Grid xs={6}>
                  <Box>
                    <img
                      alt="our office 1"
                      src={imagem2}
                      ratio="3/4"
                    />
                  </Box>
                </Grid>
              </Grid>

            <Grid xs={12} md={6} lg={5}>
              <Box>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  What is Minimal?
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                  }}
                >
                  Our theme is the most advanced and user-friendly theme you will find on the market, we
                  have documentation and video to help set your site really easily, pre-installed demos
                  you can import in one click and everything from the theme options to page content can
                  be edited from the front-end. This is the theme you are looking for.
                </Typography>
              </Box>

              <Box>
                
              </Box>
            </Grid>
          </Grid>
        </Container>


      </Grid>
    </SectionContainer>
  );
};

export default AboutsSession;
