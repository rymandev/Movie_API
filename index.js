let topMovies = [
  {
    title: "Title 1",
    Director: "Director 1"
  },
  {
    title: "Title 2",
    Director: "Director 2"
  },
  {
    title: "Title 3",
    Director: "Director 3"
  },
  {
    title: "Title 4",
    Director: "Director 4"
  },
  {
    title: "Title 5",
    Director: "Director 5"
  },
  {
    title: "Title 6",
    Director: "Director 6"
  },
  {
    title: "Title 7",
    Director: "Director 7"
  },
  {
    title: "Title 8",
    Director: "Director 8"
  },
  {
    title: "Title 9",
    Director: "Director 9"
  },
  {
    title: "Title 10",
    Director: "Director 10"
  },
];

const express = require("express"),
  morgan = require("morgan");
const app = express();

// log requests
app.use(morgan("common"));

// rout to "/public" directory for static file requests
app.use(express.static("public"));

// GET requests
app.get("/movies", (req, res) => {
  res.json(topMovies);
});

app.get("/", (req, res) => {
  res.sendFile("/index.html", {root:__dirname});
});

// log errors
app.use((err,req,res,next) => {
  console.error(err.stack);
  res.status(500).send("ERROR");
});

// listen for requests
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
  });