import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Grid,
  List,
  Paper,
  Button,
  ListItem,
  Container,
  TextField,
  Typography,
  ListItemText,
} from '@mui/material';

const BookView = () => {
  const [departureTerminal, setDepartureTerminal] = useState('');
  const [arrivalTerminal, setArrivalTerminal] = useState('');
  const [availableTrains, setAvailableTrains] = useState([]);

  const handleSearch = () => {
    // Implement logic to fetch available trains based on departure and arrival terminals
    // This is a placeholder, you should replace it with actual API calls or data fetching logic
    const mockAvailableTrains = [
      { id: 1, name: 'Express Train A', departureTime: '10:00 AM', arrivalTime: '01:00 PM' },
      { id: 2, name: 'Local Train B', departureTime: '02:00 PM', arrivalTime: '05:00 PM' },
      // Add more train details as needed
    ];

    setAvailableTrains(mockAvailableTrains);
  };

  return (
    <Container maxWidth="md" style={{marginTop:'10vh'}}>
      <Typography variant="h4" align="center" gutterBottom>
        Booking Page
      </Typography>

      <Paper style={{ padding: 20, marginBottom: 20 }}>
        <Typography variant="h6" gutterBottom>
          Enter Departure and Arrival Terminals
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Departure Terminal"
              variant="outlined"
              fullWidth
              value={departureTerminal}
              onChange={(e) => setDepartureTerminal(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Arrival Terminal"
              variant="outlined"
              fullWidth
              value={arrivalTerminal}
              onChange={(e) => setArrivalTerminal(e.target.value)}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 20 }}
          onClick={handleSearch}
        >
          Search Trains
        </Button>
      </Paper>

      {availableTrains.length > 0 && (
        <Paper style={{ padding: 20 }}>
          <Typography variant="h6" gutterBottom>
            Available Trains
          </Typography>

          <List>
            {availableTrains.map((train) => (
              <ListItem key={train.id}>
                <ListItemText
                  primary={train.name}
                  secondary={`Departure: ${train.departureTime} - Arrival: ${train.arrivalTime}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Container>
  );
};

export default BookView;
