import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import cors from "cors";
import mysql from "mysql";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config({ path: fileURLToPath(new URL("../.env", import.meta.url)) });

axios.defaults.baseURL = "http://localhost:3000";
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// const corsOptions = {
//     origin: "http://localhost:5173",
//     credentials: true, //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

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

// MYSQL Connection

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

app.get("/api/users", (req, res) => {
    connection.connect((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to the MySQL server");
        }
    });

    connection.query(
        "SELECT name, password FROM users",
        (err, rows, fields) => {
            if (err) {
                console.log(err);
                res.status(500).send("Internal Server Error");
                return;
            }

            const users = rows.map((row) => {
                return {
                    name: row.name,
                    password: row.password,
                };
            });

            console.log(users);
            res.send(users);

            connection.end();
        }
    );
});

// Bcrypt Password Hashing

const saltRounds = 10;

app.post("/api/users", async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    connection.connect((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to the MySQL server");
        }
    });

    connection.query(
        "INSERT INTO users (name, password) VALUES (?, ?)",
        [name, hashedPassword],
        (err, rows, fields) => {
            if (err) {
                console.log(err);
                res.status(500).send("Internal Server Error");
                return;
            }

            res.send(rows);

            connection.end();
        }
    );
});

app.post("/api/login", async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    try {
        connection.query(
            "SELECT * FROM users WHERE name = ?",
            [name],
            async (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.status(500).send("Internal Server Error");
                    return;
                }

                if (rows.length === 0) {
                    res.status(400).send("Invalid name or password");
                    return;
                }

                const user = rows[0];
                const compareResult = await bcrypt.compare(
                    password,
                    user.password
                );

                if (compareResult) {
                    const token = jwt.sign(
                        {
                            id: user.id,
                            name: user.name,
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: "1h",
                        }
                    );

                    res.send({
                        token,
                        id: user.id,
                        name: user.name,
                    });
                } else {
                    res.status(400).send("Invalid name or password");
                }
            }
        );
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

// JWT Verify

app.get("/api/users", (req, res) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        res.status(403).send("No token");
        return;
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(403).send("Invalid token");
            return;
        }

        req.userId = decoded.id;

        connection.connect((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Connected to the MySQL server");
            }
        });

        connection.query(
            "SELECT name, password FROM users",
            (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.status(500).send("Internal Server Error");
                    return;
                }

                const users = rows.map((row) => {
                    return {
                        name: row.name,
                        password: row.password,
                    };
                });

                console.log(users);
                res.send(users);

                connection.end();
            }
        );
    });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
