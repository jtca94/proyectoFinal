import { Box, LinearProgress } from "@mui/material"

const LinearLoad = () => {
  return (
    <Box sx={{width: "100%", my: 20}}>
        <LinearProgress 
        color="secondary"
        sx={{
            borderRadius: "0.5rem",
            height: "0.8rem",
        }}
        />
    </Box>
  )
}
export default LinearLoad