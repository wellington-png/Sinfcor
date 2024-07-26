import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Paper, Grid } from '@mui/material';

const Cronometro = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        D: Math.floor(difference / (1000 * 60 * 60 * 24)),
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        M: Math.floor((difference / 1000 / 60) % 60),
        S: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <Typography key={interval} variant="h6" component="span">
        {timeLeft[interval]} {interval}{" "}
      </Typography>
    );
  });

  const formatTargetDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleDateString('pt-BR', options);
  };

  return (
    <Paper sx={{ padding: '20px', backgroundColor: '#242565', color: '#fff', borderRadius: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderBottom: '2px solid #3d3e7c', height: '120px' }}>
            <Typography variant="h6" component="span">Tempo</Typography>
            <Typography variant="h4" component="span">
              {timerComponents.length ? timerComponents : <span>Tempo esgotado!</span>}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderBottom: '2px solid #3d3e7c', height: '120px' }}>
            <Typography variant="h6" component="span">Onde</Typography>
            <Typography variant="h6" component="span">IFPI - Corrente</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderBottom: '2px solid #3d3e7c', height: '120px' }}>
            <Typography variant="h6" component="span">Data</Typography>
            <Typography variant="h6" component="span">15 a 17 Agosto</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

Cronometro.propTypes = {
  targetDate: PropTypes.string.isRequired,
};

export default Cronometro;
