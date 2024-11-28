const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const { MessagingResponse } = require("twilio").twiml;

const app = express();
const PORT = 3010;

// Path to data.json
const dataFilePath = path.join(__dirname, "data.json");

// Middleware to parse incoming POST data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log("Incoming request:", req.body);
  next();
});

// Helper functions to read/write JSON
function readData() {
  const rawData = fs.readFileSync(dataFilePath);
  return JSON.parse(rawData);
}

function writeData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// Helper function to create a response message
function createResponseMessage(message) {
  return `🤖 ${message}`;
}

// Helper function to validate name
function isValidName(name) {
  // Allow names with letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  return nameRegex.test(name) && name.trim().length >= 2;
}

// WhatsApp webhook endpoint
app.post("/whatsapp", (req, res) => {
  const twiml = new MessagingResponse();
  const incomingMsg = req.body.Body ? req.body.Body.toLowerCase().trim() : '';
  const userNumber = req.body.From; // User's WhatsApp number
  const data = readData();

  // Find user in the data
  let user = data.users.find((u) => u.phone === userNumber);

  switch (true) {
    case incomingMsg === "start":
      // Initial greeting and options with clearer instructions
      twiml.message(createResponseMessage("👋 Welcome to Hallo Tractor! \n\n• Type 'Recommend' for personalized tractor suggestions\n• Type 'Browse' to see all tractors\n\nWhat would you like to do?"));
      break;

    case incomingMsg === "recommend":
      // More detailed recommendation flow
      twiml.message(createResponseMessage("Great! Let's find the perfect tractor for you. What's your primary use?\n\n• Type 'Farming'\n• Type 'Landscaping'\n• Type 'Construction'"));
      break;

    case ["farming", "landscaping", "construction"].includes(incomingMsg):
      // Provide targeted recommendations based on use case
      const recommendedTractors = data.tractors.filter(t => t.useCase.toLowerCase() === incomingMsg);
      let response = createResponseMessage(`🚜 Top ${incomingMsg.charAt(0).toUpperCase() + incomingMsg.slice(1)} Tractors:\n`);
      recommendedTractors.forEach((tractor) => {
        response += `🔹 ${tractor.id}. ${tractor.name} - $${tractor.price}\n`;
      });
      response += createResponseMessage('Reply "View [ID]" to see details or "Browse" for more options.');
      twiml.message(response);
      break;

    case incomingMsg === "browse":
      // Improved browsing with pagination hint
      let browseResponse = createResponseMessage("Here are some tractors for sale: 🚜\n");
      data.tractors.forEach((tractor) => {
        browseResponse += `🔹 ${tractor.id}. ${tractor.name} - $${tractor.price}\n`;
      });
      browseResponse += createResponseMessage('Reply "View [ID]" for details. Tip: More options coming soon!');
      twiml.message(browseResponse);
      break;

    case incomingMsg.startsWith("view") || /^\d+$/.test(incomingMsg):
      // View tractor details with more information
      const tractorId = parseInt(incomingMsg.split(" ")[1] || incomingMsg, 10);
      const tractor = data.tractors.find((t) => t.id === tractorId);
      if (tractor) {
        twiml.message(createResponseMessage(`🚜 Tractor Details:\n📋 Name: ${tractor.name}\n💰 Price: $${tractor.price}\n🔍 Condition: ${tractor.condition}\n🌱 Best For: ${tractor.useCase}`));
        twiml.message(tractor.image); // Send the image URL
        twiml.message(createResponseMessage("Interested? Type 'Negotiate [ID]' to start a conversation with the seller."));
      } else {
        twiml.message(createResponseMessage("❌ Tractor not found. Type 'Browse' to see available tractors."));
      }
      break;

    case incomingMsg.startsWith("negotiate"):
      // Improved negotiation start with clear instructions
      const negotiateId = parseInt(incomingMsg.split(" ")[1], 10);
      const negotiateTractor = data.tractors.find((t) => t.id === negotiateId);
      if (negotiateTractor) {
        if (!user) {
          user = { phone: userNumber, currentNegotiation: null };
          data.users.push(user);
        }
        user.currentNegotiation = { 
          tractorId: negotiateId, 
          stage: 'name_collection' 
        };
        twiml.message(createResponseMessage(`🤝 Negotiating ${negotiateTractor.name}. Please send your full name (first and last name).`));
        writeData(data);
      } else {
        twiml.message(createResponseMessage("❌ Tractor not found. Type 'Browse' to see available tractors."));
      }
      break;

    case user && user.currentNegotiation && user.currentNegotiation.stage === 'name_collection':
      // Improved name validation
      if (isValidName(incomingMsg)) {
        user.name = incomingMsg.trim();
        user.currentNegotiation.stage = 'offer_collection';
        twiml.message(createResponseMessage(`Hello, ${user.name}! 👋 What's your initial offer for the tractor? Type 'Offer [Amount]'.`));
        writeData(data);
      } else {
        twiml.message(createResponseMessage("❌ Invalid name. Please enter your full name using letters, spaces, hyphens, or apostrophes."));
      }
      break;

    case incomingMsg.startsWith("offer"):
      // Enhanced offer handling
      const userOffer = data.users.find((u) => u.phone === userNumber);
      if (userOffer && userOffer.currentNegotiation && userOffer.currentNegotiation.stage === 'offer_collection') {
        const offerAmount = parseInt(incomingMsg.split(" ")[1], 10);
        const offerTractor = data.tractors.find((t) => t.id === userOffer.currentNegotiation.tractorId);
        
        if (isNaN(offerAmount)) {
          twiml.message(createResponseMessage("❌ Please enter a valid number for your offer. Example: 'Offer 5000'"));
        } else if (offerAmount >= offerTractor.price * 0.9) {
          twiml.message(createResponseMessage(`🎉 Deal accepted, ${userOffer.name}! You've negotiated the ${offerTractor.name} at $${offerAmount}.`));
          userOffer.currentNegotiation = null; // Clear negotiation
        } else {
          twiml.message(createResponseMessage(`💔 Offer too low! The seller suggests a minimum of $${(offerTractor.price * 0.9).toFixed(2)}.`));
        }
      } else {
        twiml.message(createResponseMessage("❌ No active negotiation. Start by typing 'Negotiate [ID]'."));
      }
      break;

    default:
      // More informative default response
      twiml.message(createResponseMessage("👋 Welcome to Hallo Tractor! \n\n• Type 'Start' to begin\n• Type 'Help' for more information"));
      break;
  }

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});