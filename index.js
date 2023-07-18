const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Endpoint for serving the RSS feed
app.get('/', (req, res) => {
  // Read the XML file
  fs.readFile('./rss_feed.xml', 'utf-8', (err, xml) => {
    if (err) {
      console.error('Error reading RSS file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Set the appropriate headers
    res.setHeader('Content-Type', 'application/xml');
  
    // Send the XML response
    res.send(xml);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
