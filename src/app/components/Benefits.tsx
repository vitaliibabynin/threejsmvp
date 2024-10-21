import React from 'react'
import Image from 'next/image'

interface Benefit {
  title: string
  description: string
  icon: string
}

interface BenefitsProps {
  benefits: Benefit[]
}

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-purple-500 rounded-full p-3 mr-4">
                <Image src={benefit.icon} alt={benefit.title} width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
            </div>
            <p className="text-purple-300">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Benefits
