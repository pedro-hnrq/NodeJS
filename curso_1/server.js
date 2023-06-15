const express = require('express')
const app = express()

app.set("view engine", "ejs")


app.get("/", function(req, res){
    const items = [
        {   title: "D",
            message: "Desenvolver aplicações"
        },{
            title: "E",
            message: "EJS"
        },{
            title: "M",
            message: "Muito Bom!"
        },{
            title: "A",
            message: "Arala"
        },{
            title: "I",
            message: "Install EJS"
        },
    ];

    res.render("pages/index", {
        qualitys: items,
    });   
    
});

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Servidor funcionando")