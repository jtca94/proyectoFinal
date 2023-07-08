import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routes from './routes/routes.js';
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}
);

