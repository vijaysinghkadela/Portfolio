import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-8  rounded-lg shadow-md w-screen max-w-md ">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Contact Us
        </h2>
        <form className="space-y-4 dark:text-black">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none dark:text-black"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">
              Message:
            </label>
            <textarea
              id="message"
              className="w-full h-32 px-4 py-2 mt-1 border rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
