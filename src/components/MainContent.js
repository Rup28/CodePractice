import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import cLogo from '../Clogo.png'; 
import javaLogo from '../Javalogo.png'; 
import pythonLogo from '../Pythonlogo.jpeg'; 
import jsLogo from '../Javascript.jpeg'; 
import codingPlatformImage from '../leetcode-coding-platform.jpg';

const MainContent = () => {
  return (
    <Container id="container">
      <Box textAlign="center" my={5}>
        <Typography variant="h2" gutterBottom>
          Realtime Live Code Collaboration Space
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" my={5}>
        <Box display="flex" alignItems="center" mb={3}>
          <Typography variant="h5" gutterBottom>
            Languages Supported
          </Typography>
          <Box display="flex" ml={4} alignItems="center" >
            <Box mx={2}>
              <img src={cLogo} alt="C Logo" style={{ width: 80, height: 80 }} />
            </Box>
            <Box mx={2}>
              <img src={javaLogo} alt="Java Logo" style={{ width: 80, height: 80 }} />
            </Box>
            <Box mx={2}>
              <img src={pythonLogo} alt="Python Logo" style={{ width: 80, height: 80 }} />
            </Box>
            <Box mx={2}>
              <img src={jsLogo} alt="JavaScript Logo" style={{ width: 80, height: 80 }} />
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end" mt={5} id ="image">
          <img src={codingPlatformImage} alt="Coding Platform" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
        
        <Box my={4} textAlign="center" id="desc">
          <Typography variant="body1">
            In today's digital landscape, coding skills are highly valued. Our project, Realtime Live Code
            Collaboration Space, introduces an online coding platform designed to meet the growing
            need for accessible coding education. The platform offers a vast library of coding problems,
            ranging from beginner to advanced levels, across various programming languages. Users can
            write, test, and submit code, receiving instant feedback. Key features include individual
            solution pages with YouTube tutorials, a flexible authentication system for problem
            submission, and a robust grading system. The platform aims to provide a user-friendly
            environment for improving coding skills through diverse challenges and problems.
          </Typography>
        </Box>

        
      </Box>
    </Container>
  );
};

export default MainContent;
