import { Box, Link } from "@mui/material"
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

  const CategoryFilters = () => {

    return (
      <>
        <Box
        bgcolor="white" 
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={2}
        >
          <Typography
          variant="h5"
          fontWeight="bold">
            CATEGORÍAS
          </Typography>
          <List>
            <ListItem>
              <ArrowRightRoundedIcon fontSize="large" />
              <ListItemText
              primary={<Link href="https://www.ejemplo.com" target="_blank" rel="noopener">ACCIÓN</Link>}
              primaryTypographyProps={{ variant: 'subtitle1', color: 'primary' }} />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon fontSize="large" />
              <ListItemText
              primary={<Link href="https://www.ejemplo.com" target="_blank" rel="noopener">AVENTURAS</Link>}
              primaryTypographyProps={{ variant: 'subtitle1', color: 'primary' }} />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon fontSize="large" />
              <ListItemText
              primary={<Link href="https://www.ejemplo.com" target="_blank" rel="noopener">ESTRATEGIA</Link>}
              primaryTypographyProps={{ variant: 'subtitle1', color: 'primary' }} />
            </ListItem>
          </List>
        </Box>
      </>
      
    )
  }
  export default CategoryFilters