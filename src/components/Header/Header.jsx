import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Wave from '../../assets/wave.png';
import styled from 'styled-components';
import ParticlesComponent from '../ParticlesComponent/ParticlesComponent';
import Timeline from '../../assets/timeline/cronogramaoficial.pdf';
const Title = styled(Typography)`
    background: linear-gradient(90deg, #5324c6 0%, #840fbe 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-size: 4.5rem !important;
    font-family: "Montserrat", sans-serif;
    font-weight: 700 !important;
`;

const Header = () => {

    const onDownload = () => {
        window.open(Timeline);
    }

    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundImage: `url(${Wave})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '25% 80%',
                justifyContent: 'center',
                marginBottom: '1rem',
            }}>
            <ParticlesComponent id="particles" />
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Container maxWidth="sm" sx={{ margin: 0, display: 'flex', flexDirection: "column", rowGap: '2rem' }}>
                        <Title variant="h3" component="h1" gutterBottom>
                            Simpósio de Informática de Corrente
                        </Title>
                        <Typography variant="h5" component="h2" gutterBottom sx={{
                            display: {
                                xs: 'none',
                                md: 'block'
                            }
                        }}>
                            O SINFCOR é um evento organizado pelo Instituto Federal do Piauí - Campus Corrente, que tem como objetivo principal promover a integração entre estudantes, professores e profissionais da área de informática.
                        </Typography>
                        <Box
                            sx={{ display: 'flex', gap: '2rem' }}>
                            <Button 
                            href='https://suap.ifpi.edu.br/eventos/inscricao/1522/'
                                sx={{
                                    backgroundColor: '#F5167E',
                                    padding: '10px 20px',
                                    borderRadius: '20px',
                                    '&:hover': {
                                        backgroundColor: '#F5167Ec1',
                                    }
                                }} variant="contained" color="primary">Cadastro</Button>
                            <Button
                                onClick={onDownload}
                                sx={{
                                    padding: '10px 20px',
                                    borderRadius: '20px',
                                    borderColor: '#F5167E',
                                    color: '#F5167E',
                                    '&:hover': {
                                        backgroundColor: '#F5167E1f',
                                    }
                                }}

                                variant="outlined" color="primary"> Cronograma</Button>

                        </Box>
                    </Container>
                </Box>
            </Container >
        </Box >
    );
};

export default Header;
