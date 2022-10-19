import { Autocomplete, TextField } from "@mui/material";

const DepartureTime = (props) => {
  const timings = [
    {
      label: "18:00",
      value: {
        to: true,
        cost: 700,
      },
    },
    {
      label: "18:30",
      value: {
        to: true,
        cost: 700,
      },
    },
  ];

  return (
    <Autocomplete
      disablePortal
      options={timings}
      sx={{ width: 300 }}
      // onChange={(_, newValue) => props.setCurrentDirection(newValue)}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
};

export default DepartureTime;
