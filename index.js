import express from "express";
import "dotenv/config";
import { notFound } from "./src/middlewares/notFound.middlewares.mjs";
import route from "./src/routes/Subject.routes.mjs";
import "express-async-errors";

const app = express();

// -------------- routes -----------------------
app.use('/api/v1/exam/', route);

//--------------- middlewares ----------------------
app.use(express.json());
app.use(express.urlencoded( {extended: true }));
app.use(notFound);


const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // start the server
        app.listen(port, () => {
            console.log(`Server listening at http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
