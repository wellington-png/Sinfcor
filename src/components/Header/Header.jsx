import { Button, Container, Typography, Grid, Box } from '@mui/material';
import LogoSinfcor from '../../assets/logo-monobranco-header.png'
import ParticlesComponent from '../ParticlesComponent/ParticlesComponent';
import Timeline from '../../assets/timeline/cronogramaoficial.pdf';


const Header = () => {
 
    const OnTimeline = () => {
        window.open(Timeline)
    } 

    return (
        <Box component="header" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '15px' }}>
            <ParticlesComponent id="particles" />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container sx={{ minHeight: '100vh' }}>
                    <Grid item xs={12} md={12} sx={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(90deg, #5324c6 0%, #840fbe 100%)'
                    }}>
                        <Container maxWidth="sm" sx={{ margin: 'auto', display: 'flex', flexDirection: "column", rowGap: '2rem', alignItems: 'center', justifyContent: 'flex-end' }}>
                            {/* <Title variant="h3" component="h1" gutterBottom>
                                Simpósio de Informática de Corrente
                            </Title> isMobile */}
                            <img src={LogoSinfcor} alt="Logo do SINFCOR" style={{ width: '80%' }} />
                            <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center', color: '#FFFFFF'}}>
                                O SINFCOR é um evento organizado pelo Instituto Federal do Piauí - Campus Corrente, que tem como objetivo principal promover a integração entre estudantes, professores e profissionais da área de informática.
                            </Typography>
                            <Box
                            sx={{ display: 'flex', gap: '2rem', flexWrap:'wrap' , justifyContent:'center', marginBottom:'20px' }}>
                                <Button
                                href='https://suap.ifpi.edu.br/eventos/inscricao/1522/'
                                sx={{
                                    width: '150px',
                                    backgroundColor: '#F5167E',
                                    padding: '10px 20px',
                                    borderRadius: '20px',
                                    '&:hover': {
                                        backgroundColor: '#F5167Ec1',
                                    }
                                }} variant="contained" color="primary">Cadastro
                                
                                </Button>
                                <Button
                                    onClick={OnTimeline}
                                sx={{
                                    width: '150px',
                                    backgroundColor: '#F5167E',
                                    padding: '10px 20px',
                                    borderRadius: '20px',
                                    '&:hover': {
                                        backgroundColor: '#F5167Ec1',
                                    }
                                }} variant="contained" color="primary">
                                    Cronograma 
                                </Button>
                                <Button
                                href='https://suap.ifpi.edu.br/eventos/submissao/1522/submeter_trabalho/1/'
                                sx={{
                                    width: '150px',

                                    backgroundColor: '#F5167E',
                                    padding: '10px 20px',
                                    borderRadius: '20px',
                                    '&:hover': {
                                        backgroundColor: '#F5167Ec1',
                                    }
                                }} variant="contained" color="primary"> Submissão
                                
                                </Button>
                               
                            </Box>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Header;