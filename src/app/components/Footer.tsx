'use client'

import React, { useState, useEffect } from 'react'

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gray-800 text-purple-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="text-center mb-4">&copy; {new Date().getFullYear()} 3D Industrial Modeling Solutions. All rights reserved.</p>
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
