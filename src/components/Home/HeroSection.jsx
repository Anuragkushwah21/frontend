import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <>
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Job</h1>
          <p className="text-xl mb-6">Explore thousands of job opportunities across various industries.</p>
          <Link to="/job/getall" className="bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200">
            Browse Jobs
          </Link>
        </div>
      </section>
    </>
  )
}

export default HeroSection
