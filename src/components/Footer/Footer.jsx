import React from 'react';
import IconFacebook from '../../assets/icons/facebook.svg'
import IconTwitter from '../../assets/icons/twitter.svg'
import { Box, Container } from '@mui/material';
import Divider from '@mui/material/Divider';



export const Footer = () => {
  return (
    <Box sx={{ height: "350px", background: "#0A075F", display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', height: '100%', color: 'white', padding: '2rem' }}>
        <Container maxWidth="sm" sx={
          {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            rowGap: '1rem'
          }}>
          <h3>SINFCOR - IFPI</h3>
          <p>Eventick is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.</p>
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
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:'2rem' }}>
          <p>© 2024 SINFCOR. All rights reserved.</p>
        </Box>
      </Container>
    </Box>
  );
};
