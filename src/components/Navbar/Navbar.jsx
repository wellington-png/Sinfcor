import React, { useState, useEffect } from "react";
import { Box, Button, Container, Drawer, IconButton, Toolbar, List, ListItemButton, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';  
import LogoIF from '../../assets/Logo-IFPI.png';
import LogoSinfcor from '../../assets/logo-monobranco.png';
import LogoSinfcor2 from '../../assets/logo-gradientBgTransp.png';

const Navbar = ({ homeRef, noticiasRef, atividadesRef }) => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleLink = () => {
        window.open('https://suap.ifpi.edu.br/eventos/submissao/1522/submeter_trabalho/1/');

    }

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

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };
    const menuItems = (
        <List>
            <ListItemButton onClick={toggleDrawer(false)}>
                <ScrollLink to="home" smooth={true} duration={800}>
                    <ListItemText primary="Home" />
                </ScrollLink>
            </ListItemButton>
            <ListItemButton onClick={toggleDrawer(false)}>
                <ScrollLink to="noticias" smooth={true} duration={800}>
                    <ListItemText primary="Noticias" />
                </ScrollLink>
            </ListItemButton>
            <ListItemButton onClick={toggleDrawer(false)}>
                <ScrollLink to="atividades" smooth={true} duration={800}>
                    <ListItemText primary="Atividades" />
                </ScrollLink>
            </ListItemButton>
            <ListItemButton onClick={handleLink}>
                    <ListItemText primary="Submeter" />
            </ListItemButton>
        </List>
    );

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
                padding: '0.2rem',
            }}>
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <img src={LogoIF} width={200} alt="Logo IFPI" />
                <Box sx={{ flexGrow: 2 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
                    <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', color: scrolled ? '#000' : '#fff', }}>
                        <li>
                            <ScrollLink to="home" smooth={true} duration={800} offset={-70}>
                                <Button color="inherit">Home</Button>
                            </ScrollLink>
                        </li>
                        <li>
                        <ScrollLink to="atividades" smooth={true} duration={800} offset={-70}>
                                <Button color="inherit">Atividades</Button>
                            </ScrollLink>  
                        </li>
                        <li>
                            <ScrollLink to="noticias" smooth={true} duration={800} offset={-70}>
                                <Button color="inherit">Noticias</Button>
                            </ScrollLink>
                        </li>

                        <li>
                            <Button color="inherit" onClick={handleLink}>Submeter</Button>
                        </li>
                    </ul>
                </Box>
                <img width={200} src={scrolled ? LogoSinfcor2 : LogoSinfcor} style={{
                    display: isMobile ? 'none' : 'block'
                }} alt='logo' />
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', md: 'none' } }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    {menuItems}
                </Drawer>
            </Container>
        </Toolbar>
    );
}

export default Navbar;
