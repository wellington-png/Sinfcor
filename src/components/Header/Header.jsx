import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Wave from '../../assets/wave.png';
import styled from 'styled-components';

const Title = styled(Typography)`
    background: linear-gradient(to right, #ED4690, #5522CC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-weight: bold;
    font-size: 3.5rem;
`;

const Header = () => {
    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '84vh',
                backgroundImage: `url(${Wave})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '25% 80%',
                justifyContent: 'center',
            }}>
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Container maxWidth="sm" sx={{ margin: 0, display: 'flex', flexDirection: "column", rowGap: '2rem' }}>
                        <Title variant="h3" component="h1" gutterBottom>
                            Simpósio de Informática de Corrente
                        </Title>
                        <Typography variant="h5" component="h2" gutterBottom>
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
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
