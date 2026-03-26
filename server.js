const express = require('express');
const app = express();

app.post('/report_spam', (req, res) => {
  const phone = req.body.phone;
  // Report the phone number as spam using an API or a script
  res.send(`Phone number ${phone} reported as spam`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
