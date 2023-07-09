/* MUI */
import { Grid } from "@mui/material"

/* Componentes */
import CardProducts from "../../components/Products/CardProducts";
import CategoryFilters from "../../components/Products/CategoryFilters";

/* DB */
import FakeDatabase from "../../components/Products/FakeDatabase";

/* React */
import { useState } from "react";

const Productos = () => {

  const [arrayDB, setArrayDB] = useState(FakeDatabase);

  return (
    <>
    <Grid 
    container 
    padding={2} 
    mb={5}>
      <Grid item xs={3}>
        <CategoryFilters></CategoryFilters>
      </Grid>
      <Grid 
      item 
      xs={9}>
        <Grid 
        container 
        spacing={4}>
          {FakeDatabase.map((artículo) => (
            <Grid 
            item
            xs={4}
            key={artículo.id}
            >
              <CardProducts
              imageUrl={artículo.img}
              title={artículo.title}
              brand={artículo.category}
              description={artículo.description}
              price={artículo.price}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}
export default Productos