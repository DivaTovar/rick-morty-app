import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#beff33' }}> {/* Fondo verde */}
      <Toolbar>
      <Typography 
          variant="h6" 
          style={{ 
            flexGrow: 1, 
            fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', // Cambiar la fuente aquí
            color: '#000' // Color negro
          }}
        >
          RICK AND MORTY
        </Typography>
        <Button 
          sx={{ color: '#000', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }} 
          component={Link} 
          to="/"
        >
          Home
        </Button>
        <Button 
          sx={{ color: '#000', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }} 
          component={Link} 
          to="/aliens"
        >
          Aliens
        </Button>
        <Button 
          sx={{ color: '#000', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }} 
          component={Link} 
          to="/humans"
        >
          Humans
        </Button>
        <Button 
          sx={{ color: '#000', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }} 
          component={Link} 
          to="/about"
        >
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



