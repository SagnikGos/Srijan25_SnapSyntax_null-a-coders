import React from 'react';
import FloatingNavbar from '../components/Navbar';

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-purple-900 p-5 box-border font-sans text-center">
        <FloatingNavbar />
      
      <div className="mb-5"> 
        <div className="text-shadow-[3px_1px_2px_rgb(0,0,0)] text-white font-black text-5xl md:text-6xl">
          CONTACT
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-[25px] p-8 md:p-10 w-[85vw] md:w-[30vw] min-w-[300px] max-w-[500px] shadow-[0_4px_15px_rgba(0,0,0,0.4)] mt-5 bg-white/5 box-border">
        
        <div className="w-full mb-1 text-left">
          <label className="text-white text-base md:text-lg font-medium">
            Name
          </label>
          <div className="mt-1 w-full mb-5">
            <input 
              type="text" 
              placeholder="Enter your name" 
              aria-label="Name"
              className="w-full p-2.5 md:p-3 rounded-lg border border-gray-600 text-sm md:text-base bg-gray-100 text-gray-800 box-border placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="w-full mb-1 text-left">
          <label className="text-white text-base md:text-lg font-medium">
            Email
          </label>
          <div className="mt-1 w-full mb-5">
            <input 
              type="email" 
              placeholder="Enter your email" 
              aria-label="Email"
              className="w-full p-2.5 md:p-3 rounded-lg border border-gray-600 text-sm md:text-base bg-gray-100 text-gray-800 box-border placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="w-full mb-1 text-left">
          <label className="text-white text-base md:text-lg font-medium">
            Phone Number
          </label>
          <div className="mt-1 w-full mb-5">
            <input 
              type="tel" 
              placeholder="Enter your phone number" 
              aria-label="Phone Number"
              className="w-full p-2.5 md:p-3 rounded-lg border border-gray-600 text-sm md:text-base bg-gray-100 text-gray-800 box-border placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="mt-2.5 w-full flex justify-center">
          <button 
            type="submit"
            className="py-2.5 px-5 md:py-3 md:px-6 rounded-lg border-none bg-white text-[#2c0c2c] font-bold cursor-pointer transition duration-300 ease-in-out text-sm md:text-base hover:bg-gray-200 hover:text-black"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="text-white/70 flex justify-center mt-8 text-sm">
        &copy; Copyright limited
      </div>
    </div>
  );
};

export default ContactForm;
