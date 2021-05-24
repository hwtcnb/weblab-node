const express = require("express");
const path = require("path");
const pool = require("./model/db");
const router = require("./routes/routes");


const PORT = process.env.PORT || 5000;

  
const app = express();

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/public/html/index.html");
})
  
app.get("/form", (request, response) => {
    response.sendFile(__dirname + "/public/html/form.html");
});


app.listen(PORT, async() => {
    await pool.connect();
    pool.query(`CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        name VARCHAR (25),
        surname VARCHAR (25),
        email VARCHAR (25),
        password VARCHAR (25),
        sex VARCHAR (25),
        year VARCHAR (25)
    )`, (err, res) => {
        if (err) throw err;
    })
    console.log(`Server started on port: ${PORT}`);
});



