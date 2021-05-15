const { response } = require("express");
const express = require("express");
const { request } = require("http");
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

app.get("/database", async(req, res) => {
    let Users = await pool.query(
        "SELECT * FROM users"
    )
    Users = Users.rows;
    res.json(Users);
});

app.get("/database/:id", async(req, res) => {
    const { id } = req.params;
    let User = await pool.query(
        "SELECT * FROM users WHERE user_id = $1",
        [id]
    )
    
    res.json(User.rows[0]);
})
  
app.get("/form", (request, response) => {
    response.sendFile(__dirname + "/public/html/form.html");
});

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;

})

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});



