import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import '../styles.css'; 

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Box>
          <Button className="login-button" component={Link} to="/login">
            Login
          </Button>
          <Button 
            className="github-button"
            color="inherit"
            href=""
            startIcon={<GitHubIcon />}
            sx={{ marginLeft: 2 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
