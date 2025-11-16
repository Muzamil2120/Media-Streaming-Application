import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { PlayArrow, Visibility, Schedule } from '@mui/icons-material';

const Home = () => {
  // Mock data - replace with actual API calls
  const mockMedia = [
    {
      id: 1,
      title: 'Beautiful Sunset',
      description: 'Amazing sunset timelapse',
      views: 150,
      createdAt: '2024-01-15',
      uploadedBy: { name: 'John Doe' },
    },
    {
      id: 2,
      title: 'Ocean Waves',
      description: 'Relaxing ocean sounds',
      views: 89,
      createdAt: '2024-01-14',
      uploadedBy: { name: 'Jane Smith' },
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Discover Amazing Content
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Explore the latest videos and audio uploads from our community
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {mockMedia.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  height: 200,
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <PlayArrow
                  sx={{
                    fontSize: 48,
                    color: 'rgba(0, 0, 0, 0.6)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <Visibility fontSize="small" />
                  {item.views}
                </Box>
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  {item.description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  <Schedule fontSize="small" sx={{ mr: 0.5, verticalAlign: 'middle' }} />
                  {new Date(item.createdAt).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  By {item.uploadedBy.name}
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  href={`/media/${item.id}`}
                  sx={{ mt: 2 }}
                >
                  Play
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {mockMedia.length === 0 && (
        <Box textAlign="center" py={8}>
          <Typography variant="h6" color="text.secondary">
            No media available yet. Be the first to upload!
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Home;