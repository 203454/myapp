import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './AppBar.css'

const pages = ['Zapatos', 'Camisas', 'Pantalones'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const threshold = 45; // ajusta aquí el valor para cambiar el color del AppBar
      setIsScrolled(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar elevation={0} position="fixed"
      sx={{
        // Buen color #f50057
        // backgroundColor: isScrolled ? 'white' : 'transparent', transition: 'background-color 0.3s ease-in-out'
        backgroundColor: isScrolled ? 'black' : 'black',
        boxShadow: isScrolled ? '0px 2px 4px rgba(0, 0, 0, 0.25)' : 'none',
        transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
    
          <Box justifyContent="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: isScrolled ? '#b49a66' : 'wheat', display: 'block' }}
              >
                <p  > {page} </p>

              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;