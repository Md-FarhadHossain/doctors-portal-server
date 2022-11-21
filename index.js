const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
require("dotenv").config();
require("colors");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mongodb Connect / Database connect

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.1ivadd4.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const dbConnect = async () => {
    try {
        await client.connect()
        console.log('Database conncected'.bgGreen.bold)
    }
    catch(error) {
        console.log(error.name.bgRed.bold, error.message.bold )
    }
}

dbConnect()


// Database integration

app.get("/", (req, res) => {
  res.send(`Doctors portal is running on port ${PORT}`);
});


// Server listing with port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
