import { useEffect, useState } from "react";
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import LogoIF from '../../assets/Logo-IFPI.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Toolbar
            sx={{
                display: 'flex',
                position: 'fixed',
                top: 0,
                right: 0,
                width: '100%',
                zIndex: 1100,
                backgroundColor: scrolled ? 'white' : 'transparent',
                transition: 'background-color 0.3s ease',
            }}>
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <img src={LogoIF} width={200} alt="Ironhack logo" />
                <Box sx={{ flexGrow: 2 }} />
                <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
                    <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
                        <li>
                            <Button color="inherit">Home</Button>
                        </li>
                        <li>
                            <Button color="inherit">Noticias</Button>
                        </li>
                        <li>
                            <Button color="inherit">Atividades</Button>
                        </li>
                    </ul>
                </Box>
                <Typography variant="h6" component="div">
                    SINFCOR
                </Typography>
            </Container>
        </Toolbar>
    );
}

export default Navbar;