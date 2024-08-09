import React from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box 
          component="form" 
          noValidate 
          autoComplete="off" 
          display="flex" 
          flexDirection="column"
        >
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
            fullWidth
            required
          />
          <Button 
            variant="contained" 
            color="primary" 
            type="submit"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
