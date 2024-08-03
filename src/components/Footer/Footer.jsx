import React from 'react';
import IconFacebook from '../../assets/icons/facebook.svg';
import IconTwitter from '../../assets/icons/twitter.svg';
import { Box, Container, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import styled, { keyframes } from 'styled-components';

// Animação de onda
const waveAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const FooterWaveContainer = styled(Box)`
  width: 100%;
  overflow: hidden;
  max-height: 10vh;
`;

const FooterWave = styled.svg`
  width: 200%; 
  height: auto;
  animation: ${waveAnimation} 10s linear infinite;
  margin: 0 0 -10px 0;
  
`;

const FooterContainer = styled(Box)`
  min-height: 350px;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  background: #5A53C6;
`;

export const Footer = () => {
  return (
    <>
      <FooterWaveContainer>
        <FooterWave
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1835 187"
          preserveAspectRatio="xMidYMid"
        >
          <g style={{ transform: 'matrix(1, 0, 0, -1, 0, 187)' }}>
            <linearGradient y2="0" y1="0" x2="1" x1="0" id="lg-m6uhyfcm3n">
              <stop offset="0" stopColor="#5324c6" />
              <stop offset="1" stopColor="#5324c6" />
            </linearGradient>
            <path
              opacity="0.9"
              fill="url(#lg-m6uhyfcm3n)"
              d="M 0 0 L 0 162.56 Q 305.83 182.53 611.67 147.12 T 1223.33 135.63 T 1835 129.44 L 1835 0 Z"
            />
            <path
              opacity="0.9"
              fill="url(#lg-m6uhyfcm3n)"
              d="M 0 0 L 0 147.82 Q 305.83 180.56 611.67 159.8 T 1223.33 133.22 T 1835 140 L 1835 0 Z"
            />
            <path
              opacity="0.9"
              fill="url(#lg-m6uhyfcm3n)"
              d="M 0 0 L 0 144.01 Q 305.83 172.44 611.67 151.86 T 1223.33 148.99 T 1835 145.59 L 1835 0 Z"
            />
          </g>
        </FooterWave>
      </FooterWaveContainer>
      <FooterContainer>
        <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', height: '100%', color: 'white' }}>
          <Container maxWidth="sm" sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            rowGap: '1rem'
          }}>
            <Typography sx={{
              fontFamily: 'Light',
              fontSize: '2.5rem',
              color: 'white',
              fontWeight: 'bold',
            }}>SINFCOR - IFPI</Typography>
            <Typography>O Simpósio de Informática de Corrente Piauí é um evento que promove o conhecimento e a inovação tecnológica, oferecendo minicursos, palestras e atividades práticas. É a oportunidade perfeita para se conectar com outros entusiastas, aprender novas habilidades e explorar as tendências emergentes da informática.</Typography>
            <Box sx={{ display: 'flex', columnGap: '1rem' }}>
              <a href='https://www.facebook.com/'>
                <img src={IconFacebook} alt='Facebook' />
              </a>
              <a href='https://www.twitter.com/'>
                <img src={IconTwitter} alt='Twitter' />
              </a>
            </Box>
          </Container>
          <Divider variant="middle" sx={{ borderColor: '#4C4D8B' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
            <Typography>&copy; 2024 SINFCOR. Todos os direitos reservados.</Typography>
          </Box>
        </Container>
      </FooterContainer>
    </>
  );
};
