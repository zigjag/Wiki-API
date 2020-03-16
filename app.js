const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.set("view engine", ejs);
app.use(express.static("public/"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const articleSchema = {
  title: String,
  content: String
};
const Article = mongoose.model("Article", articleSchema);

// -------------------Port Section-------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log("Server connected on " + PORT);
});

// -------------------Get Section-------------------
app.get("/articles", (req, res)=>{
  Article.find((err, foundArticles)=>{
    if(!err) res.send(foundArticles);
    else res.send(err);
  });
});

// -------------------Post Section-------------------
app.post("/add", (req, res)=>{

});
