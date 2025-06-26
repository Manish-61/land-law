// src/LandLawSearch.jsx
import {
  Box,
  Container,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';
import { useState } from 'react';

const landLaws = [
  {
    title: 'Right to Fair Compensation and Transparency in Land Acquisition Act, 2013',
    description: 'Provides guidelines for compensation, rehabilitation, and resettlement of affected families.',
  },
  {
    title: 'Forest Rights Act, 2006',
    description: 'Recognizes rights of forest-dwelling communities over land and forest resources.',
  },
  {
    title: 'Land Ceiling Act',
    description: 'Imposes limits on land holdings to prevent concentration of land ownership.',
  },
  {
    title: 'Panchayats (Extension to Scheduled Areas) Act, 1996',
    description: 'Empowers local self-governance in tribal areas with respect to land decisions.',
  },
  {
    title: 'The Indian Easements Act, 1882',
    description: 'Covers rights related to the use of others’ land (like right of way).',
  },
];

export default function LandLawSearch() {
  const [query, setQuery] = useState('');

  const filteredLaws = landLaws.filter((law) =>
    law.title.toLowerCase().includes(query.toLowerCase()) ||
    law.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Search Land Laws
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter keywords (e.g., compensation, forest, easement)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ mb: 4 }}
      />

      <Paper elevation={2}>
        <List>
          {filteredLaws.length === 0 ? (
            <ListItem>
              <ListItemText primary="No matching laws found." />
            </ListItem>
          ) : (
            filteredLaws.map((law, index) => (
              <ListItem key={index} alignItems="flex-start" divider>
                <ListItemText
                  primary={<strong>{law.title}</strong>}
                  secondary={law.description}
                />
              </ListItem>
            ))
          )}
        </List>
      </Paper>
    </Container>
  );
}
