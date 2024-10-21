import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

const testimonials = [
  {
    name: "John Doe",
    company: "Industrial Corp",
    feedback: "The 3D modeling services provided by this company have revolutionized our industrial planning process. Highly recommended!",
    imageUrl: "/images/testimonials/john-doe.jpg"
  },
  {
    name: "Jane Smith",
    company: "Tech Innovations",
    feedback: "Their VR tours of our proposed installations were incredibly detailed and helped us make informed decisions. Excellent work!",
    imageUrl: "/images/testimonials/jane-smith.jpg"
  },
  {
    name: "Mike Johnson",
    company: "Manufacturing Solutions",
    feedback: "The team's expertise in 3D modeling and their assistance in implementing upgrades have been invaluable to our operations.",
    imageUrl: "/images/testimonials/mike-johnson.jpg"
  }
]

export default function Home() {
  return (
    <>
      <Hero 
        headline="Digitize Your Industrial Installations"
        subheadline="Expert 3D modeling solutions for your business"
        videoSrc="/videos/hero-background.mp4"
      />
      {/* Other sections will be added here */}
      <Testimonials testimonials={testimonials} />
      <CTA 
        headline="Ready to Transform Your Industrial Planning?"
        subheadline="Book a demo today and see how our 3D modeling solutions can revolutionize your operations."
        buttonText="Book a Demo"
      />
    </>
  )
}
