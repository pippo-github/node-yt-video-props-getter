const express = require ("express")
const app = express()
const path = require("path")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "static_pages_html")))
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, "nodeProject/views"));

const {router} = require("./routerApp/router");
const PORT = process.env.PORT || 3000

app.get("/", router);
app.get("/show_restAPI", router);
app.post("/*", router);

app.listen(PORT, () =>{
    console.log(`sei connesso al server alla porta: ${PORT}`)
})