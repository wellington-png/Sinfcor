import { Button, Container, Typography, Grid, Box, useTheme, useMediaQuery } from '@mui/material';
import Wave from '../../assets/wave.png';
import logoHeader from '../../assets/logo-header.png';
import LogoSinfcor from '../../assets/logo-monobranco-header.png'
import styled from 'styled-components';
import ParticlesComponent from '../ParticlesComponent/ParticlesComponent';

const Title = styled(Typography)`
    background: linear-gradient(90deg, #5324c6 0%, #840fbe 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-size: 4.5rem !important;
    font-family: "Raleway", sans-serif !important;
    font-weight: 700 !important;
`;

const Header = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box component="header" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <ParticlesComponent id="particles" />
            <Box  sx={{ flexGrow: 1 }}>
                <Grid container spacing={{
                    xs: 0,
                    md: 2
                }} sx={{ minHeight: '100vh' }}> 
                    <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: {
                        xs:  'linear-gradient(90deg, #5324c6 0%, #840fbe 100%)',
                        md: 'none',
                    } } }>
                        <Container maxWidth="sm" sx={{ margin: 'auto', display: 'flex', flexDirection: "column", rowGap: '2rem', alignItems: 'center', justifyContent: 'flex-end' }}> 
                            {/* <Title variant="h3" component="h1" gutterBottom>
                                Simpósio de Informática de Corrente
                            </Title> isMobile */}
                            <img src={isMd ? LogoSinfcor : logoHeader } alt="Logo do SINFCOR" style={{ width: '80%' }} />
                            <Typography variant="h5" component="h2" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                                O SINFCOR é um evento organizado pelo Instituto Federal do Piauí - Campus Corrente, que tem como objetivo principal promover a integração entre estudantes, professores e profissionais da área de informática.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '2rem' }}>
                                <Button sx={{
                                    backgroundColor: '#F5167E',
                                    padding: '10px 20px',
                                    borderRadius: '20px',
                                    '&:hover': {
                                        backgroundColor: '#F5167Ec1',
                                    }
                                }} variant="contained" color="primary">Cadastro</Button>
                                <Button
                                    sx={{
                                        padding: '10px 20px',
                                        borderRadius: '20px',
                                        borderColor: '#F5167E',
                                        color: '#F5167E',
                                        '&:hover': {
                                            backgroundColor: '#F5167E1f',
                                        }
                                    }}
                                    variant="outlined" color="primary">Saiba mais</Button>
                            </Box>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={7} sx={{
                        backgroundImage: `url(${Wave})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left',
                        minHeight: '100vh',
                        display: { xs: 'none', md: 'block' }
                    }}>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Header;
