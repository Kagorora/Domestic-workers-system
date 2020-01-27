import express from "express";


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get("/", (req, res) => res
.status(200)
.send( "Welcome to HouseKeepers.com!"));


app.use("*", (req, res) => res
.status(405)
.send("Method Not Allowed!"));


const port = process.env.PORT || 3000;
app.listen(port);

console.log(`App listening on port ${port}...`)

export default app;