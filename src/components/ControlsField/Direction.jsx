import { Autocomplete, TextField } from "@mui/material";

const Direction = (props) => {
  const directions = [
    {
      label: "из A в B",
      value: {
        to: true,
        cost: 700,
      },
    },
    {
      label: "из B в A",
      value: {
        from: true,
        cost: 700,
      },
    },
    {
      label: "из A в B и обратно в А",
      value: {
        to: true,
        from: true,
        cost: 1200,
      },
    },
  ];

  return (
    <Autocomplete
      disablePortal
      options={directions}
      sx={{ width: 300 }}
      onChange={(_, newValue) => props.setCurrentDirection(newValue)}
      renderInput={(params) => (
        <TextField {...params} label="Выбрать направление" />
      )}
    />
  );
};

export default Direction;
