

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Reting = require('./models/Reting.js');

// Express server port
const PORT = process.env.PORT || 3000;
// Express setup 
const app = express();

// Mideware
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URIL)
.then(() => console.log("MongoDB Atlas Connected"))
.catch((err) => console.log(err));

//------------------------------------------------------------ Routing aria --------------------------------------------------------//

app.post('/api/rating', async (req, res) => {
    try {
        const newReting = Reting(req.body);
        await newReting.save();
        res.status(200).json(newReting);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

app.get('/api/rating', async (req, res) => {
    try {
      const allRetings = await Reting.find(); // fetch all from DB
      res.status(200).json(allRetings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});



//------------------------------------------------- Common server aria -----------------------------------------------------------//
// Simple Route
app.get("/", (req, res) => {
    res.send("Backend is Running")
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is Running http://localhost:${PORT}`);
})
