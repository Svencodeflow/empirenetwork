import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config({ path: fileURLToPath(new URL("../.env", import.meta.url)) });

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/config/db", (req, res) => {
    const dbHost = process.env.DB_HOST;
    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWORD;
    const dbDatabase = process.env.DB_DATABASE;
    const dbPort = process.env.DB_PORT;

    // res.send(`mysql://${dbUser}:${dbPassword}@${dbHost}/${dbDatabase}`);

    res.send({
        dbHost,
        dbUser,
        dbPassword,
        dbDatabase,
        dbPort,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
