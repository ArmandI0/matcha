import React from 'react';
import { Paper, Chip, ListItem } from '@mui/material';

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular', selected: false },
    { key: 1, label: 'jQuery', selected: false },
    { key: 2, label: 'Polymer', selected: false },
    { key: 3, label: 'React', selected: false },
    { key: 4, label: 'Vue.js', selected: false },
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => (
        <ListItem key={data.key}>
          <Chip
            label={data.label}
            onClick={() => handleClick(data)}
            color={data.selected ? "primary" : "default"}
            variant={data.selected ? "" : "outlined"}
            clickable
            sx={{ m: 0.5 }}
          />
        </ListItem>
      ))}
    </Paper>
  );
}