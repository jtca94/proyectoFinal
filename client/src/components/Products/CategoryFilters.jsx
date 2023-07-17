import {Box, Typography, Checkbox, Button} from "@mui/material";
import {gameCategories} from "../../utils/gameCategories";
import {useState} from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const CategoryFilters = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <Box
        sx={{
          borderRadius: "10px",
          boxShadow: "0px 9px 15px -1px rgba(0,0,0,0.2)",
          p: 3,
          overflow: "hidden", // Ensure the parent div shrinks
          transition: "height 0.3s ease-in-out", // Transition for parent div height change
          height: show ? "auto" : "100%", // Set the initial height of the parent div
          backgroundColor: "lightgray",
        }}
      >
        <Button
          onClick={handleShow}
          size="large"
          sx={{fontSize: 24, color: "#006D89"}}
          endIcon={
            <ArrowDropUpIcon
              sx={{
                transform: show ? "rotate(180deg)" : "",
                transition: "transform 0.3s ease",
              }}
            />
          }
        >
          CATEGORIAS
        </Button>
        <Box
          sx={{
            opacity: show ? 1 : 0,
            height: show ? "auto" : 0,
            transform: show ? "translateY(0)" : "translateY(-100%)", // Move the component up
            transition: "opacity 0.3s ease, height 0.3s ease", // Transition for component movement
          }}
        >
          {gameCategories.map((category) => (
            <Box
              key={category.label}
              sx={{display: "flex", alignItems: "center"}}
            >
              <Checkbox sx={{mr: 1}} />
              <Typography>{category.label}</Typography>
            </Box>
          ))}
        </Box>
        <Button size="large" sx={{fontSize: 24, color: "#006D89"}}>
          Filtros
        </Button>
      </Box>
    </>
  );
};

export default CategoryFilters;
