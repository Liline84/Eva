Copy
          Run
          // WhatsApp Account Ban Script

// Define the WhatsApp API endpoint
const apiEndpoint = 'https://graph.facebook.com/v13.0/';

// Define the access token for the WhatsApp Business API
const accessToken = 'YOUR_ACCESS_TOKEN_HERE';

// Define the phone number of the account to ban
const phoneNumber = '+1234567890';

// Define the reason for the ban (optional)
const banReason = 'Spamming or harassment';

// Set up the API request
const axios = require('axios');
const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/json'
};

// Ban the WhatsApp account
axios.post(`${apiEndpoint}accounts/${phoneNumber}/ban`, {
  reason: banReason
}, {
  headers: headers
})
.then((response) => {
  console.log(`Account ${phoneNumber} banned successfully.`);
})
.catch((error) => {
  console.error(`Error banning account ${phoneNumber}: ${error.message}`);
});
