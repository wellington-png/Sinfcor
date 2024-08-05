import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Paper, Grid } from '@mui/material';

const stylesBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '2px solid #3d3e7c',
  height: '120px'
};

const StopWatch = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        D: Math.floor(difference / (1000 * 60 * 60 * 24)),
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        M: Math.floor((difference / (1000 * 60)) % 60),
        S: Math.floor((difference / 1000) % 60)
      };
    }

    // Adicionar zero à esquerda se necessário
    return {
      D: timeLeft.D?.toString().padStart(2, '0') || '00',
      H: timeLeft.H?.toString().padStart(2, '0') || '00',
      M: timeLeft.M?.toString().padStart(2, '0') || '00',
      S: timeLeft.S?.toString().padStart(2, '0') || '00'
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeLeft(calculateTimeLeft()); // Atualiza o estado inicial quando targetDate muda

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    timerComponents.push(
      <Typography key={interval} variant="h6" component="span">
        {timeLeft[interval]} {interval}{" "}
      </Typography>
    );
  });

  return (
    <Paper sx={{ padding: '20px', backgroundColor: '#242565', color: '#fff', borderRadius: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Box sx={stylesBox}>
            <Typography variant="h6" component="span">Tempo</Typography>
            <Typography variant="h4" component="span">
              {timerComponents.length ? timerComponents : <span>Tempo esgotado!</span>}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={stylesBox}>
            <Typography variant="h6" component="span">Onde</Typography>
            <Typography variant="h6" component="span">IFPI - Corrente</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ ...stylesBox, borderBottom: { xs: "none", sm: "2px solid #3d3e7c" } }}>
            <Typography variant="h6" component="span">Data</Typography>
            <Typography variant="h6" component="span">16 a 17 Agosto</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

StopWatch.propTypes = {
  targetDate: PropTypes.string.isRequired,
};

export default StopWatch;
