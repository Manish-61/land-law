// src/LandHqGetStarted.jsx
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Container,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, Link as RouterLink } from 'react-router-dom';

const steps = [
  'Sign Up or Log In',
  'Create a Project',
  'Upload Land Details',
  'Generate Documents',
  'Manage R&R',
];

export default function LandHqGetStarted() {
  return (
    <Box sx={{ py: 8 }}>
      {/* Hero Section */}
      <Container>
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" gutterBottom fontWeight="bold">
            Get Started with LandHQ
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto' }} color="text.secondary">
            LandHQ empowers infrastructure and government professionals to handle land acquisition with speed, accuracy, and compliance — all from a single platform.
          </Typography>
          <Button
            component={RouterLink} 
            to="/search"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ mt: 4, borderRadius: 100 }}
          >
            Start Now
          </Button>
        </Box>
      </Container>

      {/* Steps Section */}
      <Box sx={{ backgroundColor: '#F3EDF7', py: 10 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Quick Setup Steps
          </Typography>

          <Stepper alternativeLabel activeStep={5} sx={{ mt: 6, mb: 6 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Grid container spacing={4} mt={4}>
            {[
              {
                title: 'Sign Up / Log In',
                description: 'Create your LandHQ account or sign in to your dashboard.',
              },
              {
                title: 'Create a Project',
                description: 'Define the purpose, area, and location of your land acquisition project.',
              },
              {
                title: 'Add Land Data',
                description: 'Upload land owner details, boundaries, surveys, and maps.',
              },
              {
                title: 'Generate Documents',
                description: 'Automatically create notices, compensation plans, and reports.',
              },
              {
                title: 'Manage R&R',
                description: 'Track resettlement progress, compensation payments, and compliance.',
              },
            ].map(({ title, description }, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    bgcolor: '#FFFFFF',
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
      <Container>
        <Box textAlign="center" mt={10}>
          <Typography variant="h5" gutterBottom>
            Ready to simplify land acquisition?
          </Typography>
          <Button component={RouterLink} to="/search" variant="contained" size="large" sx={{ borderRadius: 100 }}>
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
