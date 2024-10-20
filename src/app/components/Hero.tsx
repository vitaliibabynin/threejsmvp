'use client'

import React from 'react'

interface HeroProps {
  headline: string
  subheadline: string
  videoSrc: string
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline, videoSrc }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute z-10 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          {headline}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-purple-300 mb-8">
          {subheadline}
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
          Book a Demo
        </button>
      </div>
    </section>
  )
}

export default Hero
