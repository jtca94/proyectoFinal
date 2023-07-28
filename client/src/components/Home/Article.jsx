import {
  Box,
  Container,
  Divider,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import {Articulos} from "../../utils/articles";
import {useState} from "react";

const Article = () => {
  // paginacion con MUI
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const startIndex = (page - 1) * 2;
  const endIndex = page * 2;
  const paginatedArticles = Articulos.slice(startIndex, endIndex);

  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          fontStyle="italic"
          align="center"
          sx={{textTransform: "uppercase", mb: 3, color: "#00BB9D"}}
        >
          Noticias y Novedades
        </Typography>
        <Divider
          sx={{
            backgroundColor: "#fff",
            height: "0.1rem",
            width: "50%",
            mx: "auto",
            mb: 5,
          }}
        />
        {paginatedArticles.map(({id, img, title, body}) => (
          <Box key={id}>
            <Grid container justifyContent="center" spacing={5} sx={{mb: 5}}>
              <Grid item xs={12} sm={12} md={6} sx={{my: "auto"}}>
                <Box
                  component="img"
                  src={img}
                  alt="foto"
                  sx={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "1rem",
                    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Grid container display="flex" flexDirection="column" gap={6}>
                  <Typography
                    variant="h4"
                    color="#00BB9D"
                    sx={{textTransform: "uppercase"}}
                  >
                    {title}
                  </Typography>
                  <Box>
                    <Typography
                      variant="body1"
                      color="#FFFFFF"
                      borderRadius={5}
                      display="inline"
                      justifyContent="center"
                    >
                      {body}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Divider
              sx={{
                backgroundColor: "#000",
                height: "0.1rem",
                width: "100%",
                mx: "auto",
                my: 5,
              }}
            />
          </Box>
        ))}
        <Pagination
          count={Math.ceil(Articulos.length / 2)}
          onChange={handleChange}
          size="large"
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 5,
            "& .MuiPaginationItem-root": {
              color: "#00BB9D",
            },
            "&.Mui-selected": {
              backgroundColor: "#00BB9D",
              color: "#fff",
            },
          }}
        />
      </Container>
    </>
  );
};
export default Article;
