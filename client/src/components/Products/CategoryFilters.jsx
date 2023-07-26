// MUI
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Snackbar,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// COMPONENTS
import {gameCategories} from "../../utils/gameCategories";
// REACT
import {useContext, useState} from "react";
// Context
import {ProductsContext} from "../../context/ProductsContext";

const CategoryFilters = () => {
  const {products, setFilteredProducts, setSortedProducts} = useContext(ProductsContext);
  const [open, setOpen] = useState(false);

  const handleCheck = (e) => {
    const category = e.target.value;
    if (category === "all") {
      setFilteredProducts([]);
      setSortedProducts(products);
    } else {
      const filtered = products.filter((product) => {
        return product.category === category;
      });
      if (filtered.length === 0) {
        setOpen(true);
      }
      setFilteredProducts(filtered);
      setSortedProducts(filtered);
    }
  };

  return (
    <>
      <Accordion        
      sx={{backgroundColor: "lightgray"}}
      
      >
        <AccordionSummary
          expandIcon={<ArrowDropUpIcon sx={{color: "#00BB9D"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4" sx={{color: "#00BB9D"}}>
            Categorías
          </Typography>
        </AccordionSummary>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          sx={{marginTop: "4rem"}}
          onClose={() => setOpen(false)}
          message="No hay productos en esta categoría"
          anchorOrigin={{vertical: "top", horizontal: "right"}}
        />
        <Box sx={{display: "flex", flexDirection: "column", p: 2}}>
          <FormControl sx={{m: 1}}>
            <RadioGroup name="category" defaultValue="all">
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="Todos"
                onChange={handleCheck}
              />
              {gameCategories.map((item) => (
                <FormControlLabel
                  key={item.label}
                  value={item.label}
                  control={<Radio />}
                  label={item.label}
                  onChange={handleCheck}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </Accordion>
    </>
  );
};

export default CategoryFilters;
