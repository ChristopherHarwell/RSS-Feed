const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Endpoint for serving the RSS feed
app.get('/rss', (req, res) => {
  // Read the XML file
  const xml = fs.readFileSync('rss_feed.xml', 'utf-8');

  // Set the appropriate headers
  res.setHeader('Content-Type', 'application/xml');
  
  // Send the XML response
  res.send(xml);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
