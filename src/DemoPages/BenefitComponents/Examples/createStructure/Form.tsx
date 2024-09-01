import { Box, TextField } from "@mui/material";

export const Form = () => {
  return (
    <Box sx={{ display: "flex", gap: "16px" }}>
      <TextField
        id="outlined-helperText"
        label="Nazwa PL"
        defaultValue="Benefit Systems"
        helperText="Tak będzie się nazywał startowy element w Twojej strukturze."
        sx={{ width: "100%" }}
      />
      <TextField
        id="outlined-helperText"
        label="Nazwa EN"
        defaultValue="Benefit Systems"
        sx={{ width: "100%" }}
      />
    </Box>
  );
};
