const express = require("express");
const router = express.Router();
const AT = require("africastalking")({ apiKey: "YOUR_API_KEY", username: "YOUR_USERNAME" });
const sms = AT.SMS;  // SMS service
const tractorData = require("./tractors"); // Import tractor and operator data

// Object to store user session data (this will track where the user is in the flow)
const sessionState = {};

// USSD Handler for requests
router.post("/", (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  console.log('USSD Request:', req.body);

  // Initialize session state if not already initialized
  if (!sessionState[sessionId]) {
    sessionState[sessionId] = { step: 0, subStep: 0, data: {} };
  }

  const userState = sessionState[sessionId];
  let response = "";

  // Handle empty or invalid input (when no 'text' is received)
  if (!text) {
    response = "❌ No input received. Please enter a valid option.";
    userState.step = 0; // Reset to the main menu
    return res.send(response);
  }

  // New User Profile Setup (First-time interaction)
  if (!userState.data.name) {
    response = "CON 🚜 Welcome to the Tractor Marketplace! Please enter your name:"; 
    userState.step = 6;  // Proceed to name entry step
  } else {
    // Main Menu for registered users
    if (userState.step === 0) {
      response = `CON 🚜 Welcome back, ${userState.data.name}! What would you like to do today?\n`;
      response += "1. 🚜 List a tractor for sale\n";
      response += "2. 📋 View available tractors for sale\n";
      response += "3. 🛠️ Find a certified tractor operator\n";
      response += "4. 💰 View real-time tractor prices\n";
      response += "5. 📝 Leave feedback\n";
      response += "6. 🛒 Start negotiating for a tractor\n";
      userState.step = 1; // Go to the main menu options
    }

    // Handling different options based on the user input
    switch (userState.step) {
      case 1:
        response = handleMainMenuOptions(userState, text, phoneNumber);
        break;
      case 2:
        response = handleTractorListing(userState, text);
        break;
      case 3:
        response = handleViewTractors(userState, text);
        break;
      case 4:
        response = handleFindOperator(userState, text);
        break;
      case 5:
        response = handleViewPrices(userState);
        break;
      case 6:
        response = handleFeedback(userState, text);
        break;
      case 7:
        response = handleNegotiation(userState, text, phoneNumber);
        break;
      default:
        response = "❌ Invalid option. Please try again.";
        userState.step = 0;
        break;
    }
  }

  // Send the response as USSD formatted text
  res.set("Content-Type: text/plain");
  res.send(response);
});

/** 
 * Main menu handler (step 1)
 */
function handleMainMenuOptions(userState, text, phoneNumber) {
  let response = "";
  switch (text) {
    case "1":
      response = "CON 🚜 Please enter the make and model of the tractor you want to list:";
      userState.step = 2;  // Move to tractor listing step
      break;
    case "2":
      response = "CON 📋 Choose a tractor by ID to view details:";
      userState.step = 3;  // Move to view available tractors step
      break;
    case "3":
      response = "CON 🛠️ Choose a certified operator by ID:";
      userState.step = 4;  // Move to find certified operator step
      break;
    case "4":
      response = handleViewPrices(userState);  // View real-time prices
      userState.step = 0;  // Reset to main menu after viewing prices
      break;
    case "5":
      response = "CON 📝 Please type your feedback:";
      userState.step = 6;  // Move to feedback step
      break;
    case "6":
      response = "CON 🛒 Enter the tractor ID to start negotiation:";
      userState.step = 7;  // Start negotiation process
      break;
    default:
      response = "❌ Invalid option. Please try again.";
      userState.step = 0;
      break;
  }
  return response;
}

/** 
 * Handle Tractor Listing (step 2)
 */
function handleTractorListing(userState, text) {
  userState.data.tractorModel = text;  // Store tractor model
  return "CON 🚜 Please enter the tractor price:";
}

/** 
 * Handle Viewing Available Tractors (step 3)
 */
function handleViewTractors(userState, text) {
  let response = "CON 🚜 Available Tractors:\n";
  tractorData.tractors.forEach((tractor, index) => {
    response += `${index + 1}. ${tractor.model} (Price: KES ${tractor.price})\n`;
  });
  response += "📩 Reply with the tractor number to view details.";
  return response;
}

/** 
 * Handle Finding Certified Operators (step 4)
 */
function handleFindOperator(userState, text) {
  let response = "CON 🛠️ Certified Operators:\n";
  tractorData.operators.forEach((operator, index) => {
    response += `${index + 1}. ${operator.name} - ${operator.expertise}\n`;
  });
  response += "📩 Reply with the operator number to choose an operator.";
  return response;
}

/** 
 * Handle Real-time Tractor Prices (step 5)
 */
function handleViewPrices(userState) {
  let response = "💰 Real-time Tractor Prices:\n";
  tractorData.prices.forEach(price => {
    response += `${price.model}: KES ${price.pricePerUnit}\n`;
  });
  response += "🔙 Reply with 'back' to go back to the main menu.";
  return response;
}

/** 
 * Handle Feedback Submission (step 6)
 */
function handleFeedback(userState, text) {
  const feedbackMessage = text.trim();
  if (feedbackMessage) {
    tractorData.feedback.push({ user: userState.data.phoneNumber, message: feedbackMessage });
    return "END 📝 Thank you for your feedback!";
  } else {
    return "❌ Please provide some feedback before submitting.";
  }
}

/** 
 * Handle Negotiation Process (step 7)
 */
function handleNegotiation(userState, text, phoneNumber) {
  const tractorId = text.trim();
  const tractor = tractorData.tractors[tractorId];
  if (tractor) {
    userState.data.tractorId = tractorId;
    return `CON 🛒 You are negotiating for ${tractor.model} (KES ${tractor.price}). Please enter your offer price:`;
  } else {
    return "❌ Invalid tractor ID. Please try again.";
  }
}

/** 
 * Handle the Negotiation Offer (step 8)
 */
function handleNegotiationOffer(userState, text) {
  const offerPrice = text.trim();
  const tractor = tractorData.tractors[userState.data.tractorId];
  if (tractor) {
    return `END 🛒 Your offer of KES ${offerPrice} has been sent. The seller will contact you soon.`;
  } else {
    return "❌ Tractor not found.";
  }
}

module.exports = router;
