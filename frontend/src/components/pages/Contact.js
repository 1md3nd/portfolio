import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function ContactPage() {
  return (
    <Box sx={{ bgcolor: '#f0f0f0', padding: 2 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions or inquiries, feel free to reach out to us!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: contact@example.com
        </Typography>
        <Typography variant="body1">Phone: +123-456-7890</Typography>
      </Container>
    </Box>
  );
}

export default ContactPage;
