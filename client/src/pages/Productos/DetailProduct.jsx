{/* MUI */}
import { Grid, Box, Typography } from "@mui/material"
import StarBorderIcon from '@mui/icons-material/StarBorder';

{/* DB */}
import FakeDatabase from "../../components/Products/FakeDatabase.js";
import { useParams } from "react-router-dom";
import { useState } from "react";

{/* Importación de Componentes */}
import DetailProductId from "../../components/Products/DetailProductId";
import NotFound from "../404/404.jsx";

const DetailProduct = () => {

const { id } = useParams();
const [arrayDB, setArrayDB] = useState(FakeDatabase);
const checkID = arrayDB.some(article => article.id === parseInt(id));
    
return (
<>
    
    { /* CONSUMO DB FILTRADO POR USE PARAMS */ }

    {checkID ? (
        arrayDB
            .filter(article => article.id === parseInt(id))
            .map(articleFiltered => (
                <>
                <DetailProductId
                key={articleFiltered.id}
                imgURL={articleFiltered.img}
                title={articleFiltered.title}
                category={articleFiltered.category}
                description={articleFiltered.description}
                price={articleFiltered.price}
                addToCart={articleFiltered}
                ></DetailProductId>
                <Grid
                container
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                sx={{marginBottom: '6rem'}}>
                    <Grid
                    item
                    xs={10}>
                        <Typography 
                        variant="h4" 
                        fontWeight="bold"
                        marginY={2}>
                            Comentarios
                        </Typography>
                        <Typography 
                            variant="h6" 
                            fontWeight="light">
                                User1
                        </Typography>
                        <Box
                        marginBottom={2}>
                            <StarBorderIcon></StarBorderIcon>
                            <StarBorderIcon></StarBorderIcon>
                            <StarBorderIcon></StarBorderIcon>
                            <StarBorderIcon></StarBorderIcon>
                            <StarBorderIcon></StarBorderIcon>
                        </Box>
                        <Typography 
                            variant="subtitle2" 
                            fontWeight="light">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quis quibusdam eius praesentium eligendi exercitationem veritatis maiores atque debitis deleniti assumenda delectus ex, magnam dolor nihil similique harum. Esse cum eveniet totam. Tempora similique asperiores assumenda, blanditiis delectus laudantium reiciendis officia adipisci voluptatem repellat cumque quod, quasi quibusdam? Atque distinctio architecto cumque fugit ipsum laboriosam officiis repellendus quibusdam aperiam optio consequuntur quidem et perspiciatis est illo molestiae ad, laudantium nostrum? Reiciendis, debitis similique. Sit sunt nihil unde quam ad. Iste culpa, ipsa est perferendis voluptate, ad ea cumque aliquid dignissimos quaerat aperiam? Consectetur, sequi laudantium? Facilis ab assumenda sit repellendus.
                        </Typography>
                    </Grid>
                </Grid>
                </>
            ))
    ) : (
        <NotFound></NotFound>
    )}
    
    {/* CAJA DE COMENTARIOS */} 

    
    </>
  )
}

export default DetailProduct