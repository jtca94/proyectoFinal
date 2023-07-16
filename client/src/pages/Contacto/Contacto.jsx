{
  /* MUI */
}
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Contacto = () => {
  return (
    <Container>
      <Grid container justifyContent="center" sx={{marginY: "2rem"}}>
        <Grid item xs={10} sm={10} md={5} lg={6} marginY={4}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{gap: "2rem"}}
          >
            <Typography variant="h4" fontWeight="bold">
              QUIÉNES SOMOS
            </Typography>
            <Typography align="justify">
              En nuestra tienda, nos enorgullece presentarnos como un referente
              en el apasionante mundo de los videojuegos y las consolas. Con más
              de 20 años de experiencia en el mercado, hemos consolidado nuestra
              reputación como expertos en ofrecer productos y servicios de la
              más alta calidad. En cada paso de nuestro camino, nos hemos
              destacado por brindar a nuestros clientes las mejores ofertas en
              consolas y videojuegos, permitiéndoles disfrutar al máximo de sus
              momentos de entretenimiento. Nuestro compromiso se basa en la
              pasión por este universo, brindando una atención excepcional y
              garantizando una experiencia de compra inigualable. Únete a
              nosotros y descubre el mundo de los videojuegos de la mano de
              verdaderos especialistas.
            </Typography>
            <img
              src=".././src/images/contact.png"
              alt=""
              style={{width: "100%"}}
            />
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={5} lg={6} marginY={4}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{gap: "2rem"}}
          >
            <Typography variant="h4" fontWeight="bold">
              CONTÁCTANOS
            </Typography>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                width: "80%",
              }}
            >
              <TextField label="Nombre" fullWidth />
              <TextField label="Email" type="email" required fullWidth />
              <TextField label="Número" fullWidth />
              <TextField
                label="Escribe tu mensaje"
                multiline
                rows={5}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Enviar Mensaje
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacto;
