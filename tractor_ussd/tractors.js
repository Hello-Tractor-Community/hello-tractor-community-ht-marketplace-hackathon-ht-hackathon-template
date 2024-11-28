// tractorData.js

const tractorData = {
    // Example of tractor listings
    tractors: {
      T1001: {
        model: "John Deere 5500",
        price: 500000,
        description: "Used, good condition, well-maintained",
        location: "Nairobi Showroom, Nairobi",
        showroomLink: "https://goo.gl/maps/12345", // Map link
        phoneNumber: "0712345678"
      },
      T1002: {
        model: "Massey Ferguson 380",
        price: 400000,
        description: "New, unused, with all documents",
        location: "Kiambu Showroom, Kiambu",
        showroomLink: "https://goo.gl/maps/23456", // Map link
        phoneNumber: "0723456789"
      },
      T1003: {
        model: "Case IH Puma 170",
        price: 850000,
        description: "Used, high horsepower, perfect for large farms",
        location: "Kisumu Showroom, Kisumu",
        showroomLink: "https://goo.gl/maps/34567", // Map link
        phoneNumber: "0734567890"
      },
      T1004: {
        model: "Ford 6610",
        price: 350000,
        description: "Used, low hours, reliable",
        location: "Eldoret Showroom, Eldoret",
        showroomLink: "https://goo.gl/maps/45678", // Map link
        phoneNumber: "0701234567"
      },
      T1005: {
        model: "Kubota L3301",
        price: 600000,
        description: "New, with attachments",
        location: "Mombasa Showroom, Mombasa",
        showroomLink: "https://goo.gl/maps/56789", // Map link
        phoneNumber: "0745678901"
      },
      T1006: {
        model: "Fendt 716 Vario",
        price: 1200000,
        description: "New, high-efficiency engine, ideal for large farms",
        location: "Nakuru Showroom, Nakuru",
        showroomLink: "https://goo.gl/maps/67890", // Map link
        phoneNumber: "0798765432"
      },
      T1007: {
        model: "Claas Arion 650",
        price: 950000,
        description: "Used, excellent condition, low hours",
        location: "Thika Showroom, Thika",
        showroomLink: "https://goo.gl/maps/78901", // Map link
        phoneNumber: "0711122334"
      },
      T1008: {
        model: "New Holland T7.210",
        price: 700000,
        description: "Used, ready to work, good condition",
        location: "Machakos Showroom, Machakos",
        showroomLink: "https://goo.gl/maps/89012", // Map link
        phoneNumber: "0732233445"
      },
      T1009: {
        model: "Valtra N174",
        price: 900000,
        description: "New, versatile, ideal for tough terrains",
        location: "Garissa Showroom, Garissa",
        showroomLink: "https://goo.gl/maps/90123", // Map link
        phoneNumber: "0789445566"
      },
      T1010: {
        model: "Deutz-Fahr Agrotron 7250",
        price: 800000,
        description: "Used, strong engine, perfect for heavy-duty tasks",
        location: "Kisii Showroom, Kisii",
        showroomLink: "https://goo.gl/maps/01234", // Map link
        phoneNumber: "0775566778"
      }
    },
  
    // Tractor prices based on model types
    prices: [
      { model: "John Deere 5500", pricePerUnit: 500000 },
      { model: "Massey Ferguson 380", pricePerUnit: 400000 },
      { model: "Case IH Puma 170", pricePerUnit: 850000 },
      { model: "Ford 6610", pricePerUnit: 350000 },
      { model: "Kubota L3301", pricePerUnit: 600000 },
      { model: "Fendt 716 Vario", pricePerUnit: 1200000 },
      { model: "Claas Arion 650", pricePerUnit: 950000 },
      { model: "New Holland T7.210", pricePerUnit: 700000 },
      { model: "Valtra N174", pricePerUnit: 900000 },
      { model: "Deutz-Fahr Agrotron 7250", pricePerUnit: 800000 }
    ],
  
    // Certified tractor operators (Example data)
    operators: [
      {
        name: "John Kamau",
        location: "Nairobi",
        phoneNumber: "0712345678",
        expertise: "Ploughing, harrowing"
      },
      {
        name: "James Mwangi",
        location: "Kiambu",
        phoneNumber: "0723456789",
        expertise: "Land cultivation, planting"
      },
      {
        name: "Mary Wambui",
        location: "Kisumu",
        phoneNumber: "0734567890",
        expertise: "Land preparation, fertilization"
      },
      {
        name: "Peter Otieno",
        location: "Eldoret",
        phoneNumber: "0701234567",
        expertise: "Farming machinery operation"
      },
      {
        name: "Ann Njeri",
        location: "Mombasa",
        phoneNumber: "0745678901",
        expertise: "Tractor repair and maintenance"
      },
      {
        name: "David Kibet",
        location: "Nakuru",
        phoneNumber: "0798765432",
        expertise: "Soil testing, ploughing"
      },
      {
        name: "Alice Muthoni",
        location: "Thika",
        phoneNumber: "0711122334",
        expertise: "Tractor handling, planting"
      },
      {
        name: "Michael Otieno",
        location: "Machakos",
        phoneNumber: "0732233445",
        expertise: "Harvesting, irrigation systems"
      },
      {
        name: "Grace Wambui",
        location: "Garissa",
        phoneNumber: "0789445566",
        expertise: "Tractor repair, land preparation"
      },
      {
        name: "Fredrick Mutiso",
        location: "Kisii",
        phoneNumber: "0775566778",
        expertise: "Tractor driving, maintenance"
      }
    ],
  
    // Example feedback data (this can be stored and used to improve the platform)
    feedback: [
      { user: "Samuel K.", message: "Great platform, easy to use!" },
      { user: "Rebecca A.", message: "I found a tractor quickly, thanks!" },
      { user: "Michael O.", message: "I love the negotiation feature. Helps me get the best deals!" },
      { user: "Grace M.", message: "The operator search feature saved me time and effort." },
      { user: "Peter N.", message: "Great selection of tractors and easy to list my own." }
    ]
  };
  
  module.exports = tractorData;
  