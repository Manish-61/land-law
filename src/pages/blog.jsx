// src/LandBlog.jsx
import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
} from '@mui/material';

export default function LandBlog() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePost = () => {
    if (formData.title && formData.content) {
      setPosts([{ ...formData, date: new Date() }, ...posts]);
      setFormData({ title: '', content: '' });
    }
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Land Issues & Community Blog
      </Typography>

      {/* Form to Add a Post */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Share Your Issue
        </Typography>
        <TextField
          name="title"
          label="Title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="content"
          label="Describe the Issue"
          value={formData.content}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handlePost}
          disabled={!formData.title || !formData.content}
        >
          Post Issue
        </Button>
      </Paper>

      {/* List of Posts */}
      {posts.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No posts yet. Be the first to share!
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {post.date.toLocaleString()}
                </Typography>
                <Typography variant="body1">{post.content}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
