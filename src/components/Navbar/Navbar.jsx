import { useEffect, useState } from "react";
import { Box, Button, Container, Drawer, IconButton, Toolbar, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LogoIF from '../../assets/Logo-IFPI.png';
import LogoSinfcor from '../../assets/logo-monobranco.png'
import LogoSinfcor2 from '../../assets/logo-gradientBgTransp.png'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
            {['Home', 'Noticias', 'Atividades'].map((text) => (
                <ListItem key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
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
                    <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', color: scrolled ? '#000' : '#fff',  }}>
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
                {/* <Typography variant="h6" component="div" sx={{
                    display: { xs: 'none', md: 'block' },
                    fontWeight: 'bold',
                    color: '#ffffff',
                    fontSize: '1.5rem',
                }}>
                    SINFCOR
                </Typography> */}
                <img width={200} src={scrolled ?  LogoSinfcor2 : LogoSinfcor} style={{
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
