const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Joke = require('./jokes');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/typechuckle', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

app.get('/jokes', async (req, res) => {
    const jokes = await Joke.find();
    res.json(jokes);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
