const express = require("express");
const path = require("path");
const pool = require("./db");


const PORT = process.env.PORT || 5000;

  
const app = express();

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/public/html/index.html");
})

app.post("/form", async(request, response) => {
    if(!request.body) return response.sendStatus(400);
    let {name, surname, email, password, sex, year} = request.body;
    if (!sex) {
        sex = "no choose";
    }
    const newUser = await pool.query(
        "INSERT INTO users (name, surname, email, password, sex, year) VALUES($1, $2, $3, $4, $5, $6)",
        [name, surname, email, password, sex, year]
    )
    response.json(request.body); 

});
  
app.get("/form", (request, response) => {
    response.sendFile(__dirname + "/public/html/form.html");
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});



