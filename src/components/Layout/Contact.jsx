import React from 'react'

function Contact() {
 
  return (
   <>
      <div className="bgimg min-h-screen flex items-center justify-center bg-gray-100 p-6 pt-20">
      <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
            //   value={formData.name}
            //   onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
            //   value={formData.email}
            //   onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
            //   value={formData.subject}
            //   onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
            //   value={formData.message}
            //   onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
        <p className="mt-6 text-center text-gray-700">
          For further inquiries, email us at <a href="mailto:support@jobportal.com" className="text-blue-600 hover:underline">support@jobportal.com</a>.
        </p>
      </div>
    </div>

   </>
  )
}

export default Contact
