# URL Shortener Application

This is a simple URL shortening application built with Node.js, Express, and MongoDB. The application allows users to input a full URL and receive a shortened version, which can be shared and accessed later. Each shortened URL keeps track of the number of clicks it receives.

## Features

- Shortens full URLs
- Displays a list of shortened URLs with their original counterparts and click counts
- Redirects users to the original URL when the shortened URL is accessed
- Tracks the number of times each shortened URL is clicked

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing URLs
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB
- **EJS**: Template engine for rendering HTML views
- **Bootstrap**: Frontend framework for styling

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- MongoDB account (you can set up a free-tier account with [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
