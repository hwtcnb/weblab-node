const express = require("express");
const path = require("path");


const PORT = process.env.PORT || 5000;

  
const app = express();

const jsonParser = express.json();

app.use(express.static(path.join(__dirname, 'public')))

app.get("/",function(request, response){
    response.sendFile(__dirname + "/public/html/index.html");
})

app.post("/form",  jsonParser ,function (request, response) {
    if(!request.body) return response.sendStatus(400);
    response.json(request.body); 
});
  
app.get("/form",function(request, response){
    response.sendFile(__dirname + "/public/html/form.html");
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});



