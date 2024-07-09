const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    trigger: String,
    joke: String
});

const Joke = mongoose.model('Joke', jokeSchema);

// Seed the database with some jokes
const seedJokes = async () => {
    await Joke.deleteMany({});
    await Joke.insertMany([
        { trigger: "banana", joke: "Why did the banana go to the doctor? Because it wasn’t peeling well!" },
        { trigger: "Why did the chicken", joke: "...cross the playground? To get to the other slide!" },
        { trigger: "knock knock", joke: "Who's there? Lettuce. Lettuce who? Lettuce in, it's freezing out here!" },
        { trigger: "how do you organize", joke: "How do you organize a space party? You planet." }
    ]);
    console.log("Database seeded with initial jokes.");
};

seedJokes();

module.exports = Joke;
