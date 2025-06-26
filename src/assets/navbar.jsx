// src/components/Navbar.jsx
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LandLaw
        </Typography>
        <Box>
          <Button component={RouterLink} to="/" color="inherit">Home</Button>
          <Button component={RouterLink} to="/get-started" color="inherit">Get Started</Button>
          <Button component={RouterLink} to="/search" color="inherit">Search</Button>
          <Button component={RouterLink} to="/blog" color="inherit">Blog</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
