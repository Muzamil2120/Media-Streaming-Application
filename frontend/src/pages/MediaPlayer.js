import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Paper } from '@mui/material';

const MediaPlayer = () => {
  const { id } = useParams();

  return (
    <Container>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4">Media Player</Typography>
        <Typography>Playing media ID: {id}</Typography>
        <Typography>Media player functionality coming soon...</Typography>
      </Paper>
    </Container>
  );
};

export default MediaPlayer;