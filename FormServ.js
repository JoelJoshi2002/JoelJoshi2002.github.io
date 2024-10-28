const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection using hardcoded connection string
const MONGO_URI = "mongodb+srv://joeljoshi2002:passwordjoel@cluster0.ovejbbc.mongodb.net/Form?retryWrites=true&w=majority"; // Use 'Form' as the database name
mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Define a Schema for the form submission
const formSchema = new mongoose.Schema({
    submissionNumber: { type: Number, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, match: /.+\@.+\..+/ }, // Basic email validation
    phoneNumber: { type: String, required: true, minlength: 10 }, // Minimum length
    companyName: { type: String, required: true },
    message: { type: String, required: true, maxlength: 500 }, // Max length for messages
}, { timestamps: true });

// Define a Schema for the submission counter
const submissionCounterSchema = new mongoose.Schema({
    count: { type: Number, default: 0 }
});

// Models
const Form = mongoose.model("Form", formSchema, 'data'); // Specify 'data' as the collection name
const SubmissionCounter = mongoose.model("SubmissionCounter", submissionCounterSchema, 'submissionCounter');

// Initialize the submission counter if it doesn't exist
async function initializeCounter() {
    const counter = await SubmissionCounter.findOne();
    if (!counter) {
        await new SubmissionCounter().save();
    }
}

// Call the counter initializer
initializeCounter();

// POST route to handle form submissions
app.post("/api/submit", async (req, res) => {
    try {
        // Increment the submission counter
        const counter = await SubmissionCounter.findOneAndUpdate({}, { $inc: { count: 1 } }, { new: true });
        
        const formData = new Form({
            submissionNumber: counter.count, // Assign the submission number
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            companyName: req.body.companyName,
            message: req.body.message,
        });

        await formData.save();
        res.status(201).json({ message: "Form submitted successfully", data: formData });
    } catch (error) {
        console.error("Error saving form data:", error);
        res.status(400).json({ error: "Error saving form data", details: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
