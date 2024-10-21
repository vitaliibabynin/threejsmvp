import React from 'react'

interface CTAProps {
  headline: string
  subheadline: string
  buttonText: string
}

const CTA: React.FC<CTAProps> = ({ headline, subheadline, buttonText }) => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          {headline}
        </h2>
        <p className="text-xl text-purple-300 mb-8">
          {subheadline}
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
          {buttonText}
        </button>
      </div>
    </section>
  )
}

export default CTA
