import React from 'react';
import { Paper, Chip, ListItem } from '@mui/material';

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Trekking', selected: false },
    { key: 1, label: 'Reading', selected: false },
    { key: 2, label: 'Gaming', selected: false },
    { key: 3, label: 'Photography', selected: false },
    { key: 4, label: 'Music', selected: false },
    { key: 5, label: 'Traveling', selected: false },
    { key: 6, label: 'Cooking', selected: false },
    { key: 7, label: 'Cycling', selected: false },
    { key: 8, label: 'Art', selected: false },
    { key: 9, label: 'Movies', selected: false },
    { key: 10, label: 'Sports', selected: false },
    { key: 11, label: 'Technology', selected: false },
    { key: 12, label: 'Fashion', selected: false },
    { key: 13, label: 'Hiking', selected: false },
    { key: 14, label: 'Fitness', selected: false },
    { key: 15, label: 'Meditation', selected: false },
    { key: 16, label: 'Writing', selected: false },
    { key: 17, label: 'Painting', selected: false },
    { key: 18, label: 'Swimming', selected: false },
    { key: 19, label: 'Gardening', selected: false },
    { key: 20, label: 'Volunteering', selected: false },
    { key: 21, label: 'Music Production', selected: false },
    { key: 22, label: 'DIY Projects', selected: false },
    { key: 23, label: 'Bird Watching', selected: false },
    { key: 24, label: 'Podcasts', selected: false },
    { key: 25, label: 'Dancing', selected: false },
    { key: 26, label: 'Yoga', selected: false },
    { key: 27, label: 'Technology News', selected: false },
    { key: 28, label: 'Astrology', selected: false },
    { key: 29, label: 'Meditation', selected: false },
    { key: 30, label: 'Baking', selected: false },
    { key: 31, label: 'Sculpture', selected: false },
    { key: 32, label: 'Nature Walks', selected: false },
    { key: 33, label: 'Birdwatching', selected: false },
    { key: 34, label: 'Camping', selected: false },
    { key: 35, label: 'History', selected: false },
    { key: 36, label: 'Astronomy', selected: false },
    { key: 37, label: 'Chess', selected: false },
    { key: 38, label: 'Writing Poetry', selected: false },
    { key: 39, label: 'Collecting Antiques', selected: false },
    { key: 40, label: 'Astronomy', selected: false },
    { key: 41, label: 'Coding', selected: false },
    { key: 42, label: 'Designing', selected: false },
    { key: 43, label: 'Makeup', selected: false },
    { key: 44, label: 'Pets', selected: false },
    { key: 45, label: 'Car Restoration', selected: false },
  ]);

  const handleClick = (chipToSelect) => {
    setChipData(chipData.map(chip => 
      chip.key === chipToSelect.key 
        ? { ...chip, selected: !chip.selected }
        : chip
    ));
  };

  return (
    <Paper
      sx={{
        p: 1,
        m: 0,
        backgroundColor: 'transparent',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: '4px',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex', // Add flex display
        flexWrap: 'wrap', // Allow wrapping
        gap: 0.5, // Add consistent gap between chips
        justifyContent: 'center',
      }}
      component="ul"
    >
      {chipData.map((data) => (
        <ListItem 
          key={data.key} 
          sx={{ 
            p: 0,
            width: 'auto', // Allow natural width
            margin: 0,
          }}
        >
          <Chip
            label={data.label}
            onClick={() => handleClick(data)}
            color={data.selected ? "primary" : "default"}
            variant={data.selected ? "" : "outlined"}
            sx={{
              '&.MuiChip-colorPrimary': {
                backgroundColor: 'rgba(254, 60, 114, 1)',
                color: 'white',
              },
              '&.MuiChip-outlined': {
                color: 'grey',
              }
            }}
            clickable
          />
        </ListItem>
      ))}
    </Paper>
  );
}