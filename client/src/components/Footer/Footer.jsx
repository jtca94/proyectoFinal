import { Container, Grid, IconButton, Link, Typography } from "@mui/material";
import { Facebook, GitHub, Instagram, Twitter, WhatsApp } from "@mui/icons-material";

function Footer() {
  return (
    <footer>
      <Container maxWidth='false' sx={{backgroundColor: 'primary.main', color: '#fff', pb: 3}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Contáctanos
            </Typography>
            <Typography variant="body1" gutterBottom>
              1235 Av Lorem, Ipsum Santiago 12345
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: +569 9999-9999
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: info@example.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Síguenos en las redes sociales
            </Typography>
            <IconButton href="https://www.facebook.com/" target="_blank" style={{ color: "#fff" }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://github.com/" target="_blank" style={{ color: "#fff" }}>
              <GitHub />
            </IconButton>
            <IconButton href="https://www.instagram.com/" target="_blank" style={{ color: "#fff" }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://twitter.com/" target="_blank" style={{ color: "#fff" }}>
              <Twitter />
            </IconButton>
            <IconButton href="https://api.whatsapp.com/send?phone=1234567890" target="_blank" style={{ color: "#fff" }}>
              <WhatsApp />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              <Link href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Nosotros
              </Link>
              {' | '}
              <Link href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Privacidad
              </Link>
              {' | '}
              <Link href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Copyright
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;