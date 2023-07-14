{/* MUI */}
import { Grid } from "@mui/material"

{/* Componentes */}
import CardProducts from "../../components/Products/CardProducts";
import CategoryFilters from "../../components/Products/CategoryFilters";

{/* DB */}
import FakeDatabase from "../../components/Products/FakeDatabase";

{/* React */}
import { useState } from "react";

import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";


const Productos = () => {

const { products } = useContext(ProductsContext)

const [arrayDB, setArrayDB] = useState(FakeDatabase);

return (
  <>
  <Grid 
  container 
  justifyContent='center'
  padding={2} 
  mb={5}>
    <Grid item 
    xs={10} sm={10} md={3} lg={3}>
      <CategoryFilters></CategoryFilters>
    </Grid>
    <Grid 
    item 
    xs={10} sm={10} md={9} lg={9}>
      <Grid 
      container 
      justifyContent='center'
      spacing={4}>
        {products.map((artículo) => (
          <Grid 
          item
          xs={10} sm={10} md={5} lg={4}
          key={artículo.id}
          >
            <CardProducts
            image={artículo.image}
            name={artículo.name}
            category={artículo.category}
            price={artículo.price}
            to={`http://localhost:5173/productos/${artículo.id}`}/>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
  </>
)}

export default Productos