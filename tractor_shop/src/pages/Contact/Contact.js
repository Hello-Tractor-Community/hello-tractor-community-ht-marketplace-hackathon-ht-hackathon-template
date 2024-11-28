import React, { useState } from 'react';
import axios from 'axios';
import Breadcrumbs from '../../components/pageProps/Breadcrumbs'; // Adjust the import based on your actual file structure

const Contact = () => {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errClientName, setErrClientName] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errMessages, setErrMessages] = useState('');

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    let isValid = true;
  
  
    if (!clientName) {
      setErrClientName('Enter your Name');
      isValid = false;
    }
  
    if (!email) {
      setErrEmail('Enter your Email');
      isValid = false;
    } else if (!EmailValidation(email)) {
      setErrEmail('Enter a Valid Email');
      isValid = false;
    }
  
    if (!messages) {
      setErrMessages('Enter your Messages');
      isValid = false;
    }
  
    if (isValid) {
      try {
        const response = await axios.post('http://askgiver-lb-prod-1246519014.us-east-1.elb.amazonaws.com/api/contact/', {
          name: clientName,
          email: email,
          message: messages,
        });
  
        // Check if the response is as expected
        if (response.data) {
          setSuccessMsg(`Thank you ${clientName}, we have received your message and will get back to you shortly.`);
          setClientName('');
          setEmail('');
          setMessages('');
        }
      } catch (error) {
        console.error('There was an error!', error.response ? error.response.data : error.message);
        // Optionally, you can set an error message to display in the UI as well
      }
    }
  };

  return (
    <div className="max-w-container mx-auto px-20">
      <Breadcrumbs title="Contact" />
      {successMsg ? (
        <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
      ) : (
        <form onSubmit={handlePost} className="pb-20">
          <h1 className="font-titleFont font-semibold text-3xl">Fill up a Form</h1>
          <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
            <div>
              <p className="text-base font-titleFont font-semibold px-2">Name</p>
              <input
                onChange={(e) => setClientName(e.target.value)}
                value={clientName}
                className="w-full py-1 border-b-2 px-2 text-base font-medium outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Enter your name here"
              />
              {errClientName && <p className="text-red-500 text-sm mt-1 px-2">{errClientName}</p>}
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full py-1 border-b-2 px-2 text-base font-medium outline-none focus-within:border-primeColor"
                type="email"
                placeholder="Enter your email here"
              />
              {errEmail && <p className="text-red-500 text-sm mt-1 px-2">{errEmail}</p>}
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">Messages</p>
              <textarea
                onChange={(e) => setMessages(e.target.value)}
                value={messages}
                className="w-full py-1 border-b-2 px-2 text-base font-medium outline-none focus-within:border-primeColor resize-none"
                rows="3"
                placeholder="Enter your message here"
              ></textarea>
              {errMessages && <p className="text-red-500 text-sm mt-1 px-2">{errMessages}</p>}
            </div>
            <button
              type="submit"
              className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
