{
  /* MUI */
}
import {Box, Typography, Checkbox} from "@mui/material";

const CategoryFilters = () => {
  return (
    <>
      <Box
        bgcolor="white"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="left"
        mt={2}
      >
        <Typography variant="h5" fontWeight="bold">
          CATEGORÍAS
        </Typography>
        <Box display="flex" alignItems="center">
          <Checkbox></Checkbox>
          <label htmlFor="checkbox" style={{fontSize: "1.2rem"}}>
            ACCIÓN
          </label>
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox></Checkbox>
          <label htmlFor="checkbox" style={{fontSize: "1.2rem"}}>
            AVENTURAS
          </label>
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox></Checkbox>
          <label htmlFor="checkbox" style={{fontSize: "1.2rem"}}>
            ESTRATEGIA
          </label>
        </Box>
      </Box>
    </>
  );
};

export default CategoryFilters;
