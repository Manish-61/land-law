// src/LandHqWebsite.jsx
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Paper,
  TextField,
} from "@mui/material";


import { Link as RouterLink } from "react-router-dom";

export default function LandHqWebsite() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Box component="section" textAlign="center" py={8} bgcolor="primarySoft">
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            Land Acquisition Made Effortless
          </Typography>
          <Typography variant="body1" mb={4}>
            LANDLAW is an AI‑powered software platform … government officers.
          </Typography>
          <Button
            component={RouterLink}
            to="/get-started"
            variant="contained"
            color="primary"
            size="large"
            sx={{ borderRadius: 8 }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      <Container id="features" py={8}>
        <Typography variant="h4" align="center" gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {[
            ["Automated Documentation", "Generate legal docs instantly."],
            ["Planning Stage Tools", "Surveys, cost estimates, alignment AI."],
            ["R&R Management", "Manage rehab/resettlement plans easily."],
            ["Legal Compliance", "Workflows per Land Acquisition Act 2013."],
            ["Real‑Time Collaboration", "Coordination across stakeholders."],
            ["Notifications & Alerts", "Alerts and progress tracking."],
          ].map(([title, desc]) => (
            <Grid key={title} item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2">{desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        component="section"
        id="how-it-works"
        textAlign="center"
        py={8}
        sx={{ backgroundColor: "secondary.100" }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>
            How It Works
          </Typography>

          <Box mt={4} display="flex" flexDirection="column" gap={3}>
            {[
              [
                "Create a Project",
                "Enter project details—location, purpose, stakeholders.",
              ],
              [
                "Get Instant Outputs",
                "Automated docs, surveys, cost estimates.",
              ],
              ["Manage R&R Seamlessly", "Design and monitor R&R plans."],
            ].map(([step, text]) => (
              <Paper
                key={step}
                elevation={3}
                sx={{ p: 3, textAlign: "left", borderRadius: 3 }}
              >
                <Typography variant="h6" gutterBottom>
                  {step}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {text}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      <Container id="contact" py={8}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Box component="form" maxWidth="sm" mx="auto" mt={4}>
          <TextField fullWidth label="Name" margin="normal" />
          <TextField fullWidth label="Email" margin="normal" type="email" />
          <TextField
            fullWidth
            label="Your message"
            margin="normal"
            multiline
            rows={4}
          />
          <Box textAlign="center" mt={2}>
            <Button variant="contained" color="primary">
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>

      <Box component="footer" textAlign="center" py={4}>
        <Typography variant="caption" color="text.secondary">
          &copy; {new Date().getFullYear()} LANDLAW. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
