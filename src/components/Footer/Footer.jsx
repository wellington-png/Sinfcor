import React from 'react';
import IconInstagram from '../../assets/icons/instagram.svg';
import QRCode from '../../assets/images/qrcode.png';
import { Box, Container, Typography } from '@mui/material';
import styled, { keyframes } from 'styled-components';

// Animação de onda
const waveAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const FooterWaveContainer = styled(Box)`
  width: 100%;
  overflow: hidden;
  max-height: 15vh;
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
              fill="#5A53C6"
              d="M 0 0 L 0 162.56 Q 305.83 182.53 611.67 147.12 T 1223.33 135.63 T 1835 129.44 L 1835 0 Z"
            />
            <path
              opacity="0.9"
              fill="#5A53C6"
              d="M 0 0 L 0 147.82 Q 305.83 180.56 611.67 159.8 T 1223.33 133.22 T 1835 140 L 1835 0 Z"
            />
            <path
              opacity="0.9"
              fill="#5A53C6"
              d="M 0 0 L 0 144.01 Q 305.83 172.44 611.67 151.86 T 1223.33 148.99 T 1835 145.59 L 1835 0 Z"
            />
          </g>
        </FooterWave>
      </FooterWaveContainer>
      <FooterContainer>
        <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', height: '100%', color: 'white' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, gap: 2, flexDirection:{
            xs: 'column',
            md: 'row'
          } }}>
            <Box sx={{ textAlign: 'left', flex: 1, marginRight: '2rem' }}>
              <Typography sx={{
                fontFamily: "Montserrat",
                fontSize: '2.5rem',
                color: 'white',
                fontWeight: 'bold',
              }}>SINFCOR - IFPI</Typography>
              <Typography>O Simpósio de Informática de Corrente Piauí é um evento que promove o conhecimento e a inovação tecnológica, oferecendo minicursos, palestras e atividades práticas. É a oportunidade perfeita para se conectar com outros entusiastas, aprender novas habilidades e explorar as tendências emergentes da informática.</Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'right' }}>
              <img src={QRCode} alt='QR Code' style={{ maxWidth: '200px', height: 'auto' }} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem', columnGap: '1rem' }}>
            <a href='https://www.facebook.com/'>
              <img src={IconInstagram} alt='Facebook' />
            </a>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
            <Typography>&copy; 2024 SINFCOR. Todos os direitos reservados.</Typography>
          </Box>
        </Container>
      </FooterContainer>
    </>
  );
};
