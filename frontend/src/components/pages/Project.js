import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function ProjectPage() {
  return (
    <Box sx={{ bgcolor: '#f0f0f0', padding: 2 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Our Projects
        </Typography>
        <Typography variant="body1" paragraph>
          Here are some of the exciting projects we've been working on:
        </Typography>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>
            <Typography variant="body1">Project 1: Description of project 1</Typography>
          </li>
          <li>
            <Typography variant="body1">Project 2: Description of project 2</Typography>
          </li>
          <li>
            <Typography variant="body1">Project 3: Description of project 3</Typography>
          </li>
          {/* Add more projects as needed */}
        </ul>
      </Container>
    </Box>
  );
}

export default ProjectPage;
