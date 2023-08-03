# APP tiende de e-commerce

## Integración y despliegue

### Link Deploy Frontend
[Deploy Frontend - Netlify](https://glistening-bavarois-1590e9.netlify.app)

### Link Deploy Backend
[Deploy Backend Node - Render](https://node-pixelplay.onrender.com)

## Instrucciones para desplegar el proyecto en modo de desarrollo

### 1. Crear la `base de datos` con la siguiente información

```sql
CREATE DATABASE IF NOT EXISTS `db_store`;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  userName VARCHAR(64) NOT NULL UNIQUE,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  address VARCHAR(255) NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  description VARCHAR(3000) NOT NULL,
  price NUMERIC(10) NOT NULL,
  category VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  stock INT NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL REFERENCES users(id),
  productId INT NOT NULL REFERENCES products(id),
  quantity INT NOT NULL
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL REFERENCES users(id),
  productId INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  rating INT NOT NULL,
  comment VARCHAR(300) NOT NULL,
  username VARCHAR(64) NOT NULL
);


INSERT INTO users (userName, firstName, lastName, password, email, address) VALUES
('admin', 'admin', 'admin', '123123123', 'admin@admin.com', 'admin'),
('user1', 'Juan', 'Pérez', '$2a$12$nxW/bdIxZ6hWbYAHXoiD2e/JIGUkJ1s5VUsThyJeFToa4J/EX0WZy', 'juan@example.com', 'Calle Principal 123'),
('user2', 'María', 'González', '$2a$12$ro0.u31.Cz/vR4wN75sV9O9Vt9ncFuB2gvLFpnfhmILRb5/U2GjCC', 'maria@example.com', 'Avenida Central 456'),
('user3', 'Pedro', 'Sánchez', '$2a$12$z68mpfeqyH.G2Vm3W8N79OIeg2.XWNdEPt4L0ObTNBqF7i3AGOwqm', 'pedro@example.com', 'Plaza Mayor 789'),
('user4', 'Ana', 'López', '$2a$12$tw14gvPNXkv8ZQg/eAZG2u3W./mCMnzbigPLk3xGeSj6Cg3vFkJxm', 'ana@example.com', 'Calle Secundaria 10'),
('user5', 'Carlos', 'Ramírez', '$2a$12$u.GWdpMB5G5XzVMOIAaRzOUY6eJg5xxKOWZLMx19vuFF54HRSuUIe', 'carlos@example.com', 'Avenida Norte 23');

INSERT INTO products (userId, name, description, price, category, image, stock) VALUES 
(1, 'The Last of Us Part II', 'The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4. Set five years after The Last of Us (2013), players control 19-year-old Ellie, who comes into conflict with a mysterious cult in a post-apocalyptic United States. The game contains survival horror elements and is played from the third-person perspective. Players can use firearms, improvised weapons, and stealth to defend against hostile humans and cannibalistic creatures infected by a mutated strain of the Cordyceps fungus.', 59990, 'Acción', 'https://i.ytimg.com/vi/eOiUtRF8k28/maxresdefault.jpg', 100),
(1, 'The Legend of Zelda: Breath of the Wild', 'The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. Breath of the Wild is part of the Legend of Zelda franchise and is set at the end of the series timeline; the player controls Link, who awakens from a hundred-year slumber to defeat Calamity Ganon before it can destroy the kingdom of Hyrule.', 39990, 'videogames', 'https://juegosdigitaleschile.com/files/images/productos/1637859721-the-legend-of-zelda-breath-of-the-wild-nintendo-switch.jpg', 100),
(1, 'Super Mario Odyssey', 'Super Mario Odyssey is a 2017 platform game developed and published by Nintendo for the Nintendo Switch. An entry in the Super Mario series, it follows Mario and Cappy, a sentient hat that allows Mario to control other characters and objects, as they journey across various worlds to save Princess Peach from his nemesis Bowser, who plans to forcibly marry her.', 69990, 'Aventura', 'https://yoshigame.cl/105/super-mario-odyssey.jpg', 100),
(1, 'God of War', 'God of War is a 2018 action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment (SIE). It is the eighth installment in the God of War series, the eighth chronologically, and the sequel to 2010s God of War III. Unlike previous games, which were loosely based on Greek mythology, this installment is loosely based on Norse mythology, with the majority of it set in ancient Norway in the realm of Midgard. For the first time in the series, there are two main protagonists: Kratos, the former Greek God of War who remains as the only playable character, and his young son Atreus; at times, the player may passively control him.', 49990, 'RPG', 'https://www.imperiogamers.cl/wp-content/uploads/2021/02/god_of_war_hits.jpg', 100),
(1, 'Red Dead Redemption 2', 'Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 in a fictionalized representation of the Western, Midwestern, and Southern United States and follows outlaw Arthur Morgan, a member of the Van der Linde gang. Arthur must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries. The story also follows fellow gang member John Marston, the protagonist of Red Dead Redemption.', 24590, 'Mundo Abierto', 'https://falabella.scene7.com/is/image/Falabella/gsc_114127330_891920_1?wid=800&hei=800&qlt=70', 100),
(1, 'The Witcher 3: Wild Hunt', 'The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by Polish developer CD Projekt Red and is based on The Witcher series of fantasy novels written by Andrzej Sapkowski. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third main installment in The Witcher video game series, played in an open world with a third-person perspective. Players control protagonist Geralt of Rivia, a monster slayer (known as a Witcher) who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her and use her powers.', 59990, 'Aventura', 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png', 100),
(1, 'Grand Theft Auto V', 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008s Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and arms smuggler Trevor Philips—and their efforts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas open countryside and the fictional city of Los Santos, based on Los Angeles.', 49990, 'Acción', 'https://cdn-products.eneba.com/resized-products/t0zqmqhdcxppyol3mtlg_350x200_2x-0.jpg', 100);

INSERT INTO ratings (userid, productid, rating, comment, username) VALUES
(1,1,5,'¡The Last of Us Part II superó todas mis expectativas! La historia épica y la jugabilidad intensa me cautivaron por completo.', 'user 1'),
(2,2,4,'The Legend of Zelda: Breath of the Wild es una joya de la versatilidad y la diversión, perfecta tanto en casa como en movimiento.', 'user 2'),
(3,3,5,'¡Super Mario Odyssey es simplemente increíble! Los gráficos impresionantes y la velocidad de carga me dejaron maravillado.', 'user 3'),
(4,4,1,'God of War me decepcionó, los problemas de rendimiento y falta de juegos exclusivos me frustraron.', 'user4'),
(5,5,4,'Red Dead Redemption 2 es divertido, pero la falta de apoyo de terceros y la escasez de juegos me decepcionaron.', 'user 5'),
(6,6,1,'The Witcher 3: Wild Hunt me decepcionó, los problemas de rendimiento y falta de juegos exclusivos me frustraron.', 'user 6'),
(1,7,4,'Grand Theft Auto V es una experiencia de plataformas épica y colorida. Únete a Rayman y sus amigos en una aventura llena de diversión y desafíos.', 'user 7'),
(2,5,4,'Grand Theft Auto V es una experiencia de plataformas épica y colorida. Únete a Rayman y sus amigos en una aventura llena de diversión y desafíos.', 'user 8');
```
### 2. Crear un archivo .env en la raíz de server con las siguientes variables:

```bash
PGUSER=postgres
PGHOST=localhost
PGPASSWORD="tu clave"
PGDATABASE=db_store
PGPORT=5432
PORT=3000
SECRET_KEY=secret_key
```

### 3. Crear un archivo .env en la raíz de client con las siguientes variables:

```bash
VITE_API_URL="http://localhost:3000"
```

### 4. Instalar dependencias en ambas carpetas (server y client)

```bash
cd server
npm install
cd client
npm install
```
### 5. Iniciar el servidor

```bash
cd server
npm run dev
```
### 6. Iniciar el cliente

```bash
cd client
npm run dev
```

### 7. Iniciar Sesión con el usuario administrador

```bash
email: admin@admin.com
password: 123123123
```

## Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- bcrypt
- jsonwebtoken
- React
- React router dom
- Formik
- Yup
- Material UI
- Nodemon

### Servidor inicia en http://localhost:3000 y cliente en http://localhost:5173

## Rutas de navegación

- /login
- /register
- /products
- /contacto
- /products/:id
- /pedidos
- /dashboard
- /dashboard/products/myprod
- /dashboard/products/sellprod
- /dashboard/products/mycart
- /*

## Desarrollado por: Jose Cannobbio y Johhan Urrutia 🚀 




