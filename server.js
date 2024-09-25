const express = require("express");
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl'); // Importing the ShortUrl model
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));


// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: false }));

// Route to display the main page with existing short URLs
app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find(); // Fetch all short URLs from the database
    res.render('index', { shortUrls: shortUrls }); // Render the index view with shortUrls data
});

// Route to create a new short URL
app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl }); // Create a new ShortUrl document
    res.redirect('/'); // Redirect to the main page
});

// Route to redirect to the original URL based on the short URL
app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl }); // Find the corresponding short URL
    if (shortUrl == null) return res.sendStatus(404); // Return 404 if not found

    // Increment the click count and save the updated document
    shortUrl.clicks++;
    await shortUrl.save();

    res.redirect(shortUrl.full); // Redirect to the original full URL
});

// Start the server on the specified port
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
