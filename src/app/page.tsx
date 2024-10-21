import Hero from './components/Hero'
import Benefits from './components/Benefits'
import ModelViewer from './components/ModelViewer'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

const benefits = [
  {
    title: "Accurate 3D Modeling",
    description: "Our state-of-the-art technology ensures highly accurate 3D models of your industrial installations.",
    icon: "icons/accuracy.svg"
  },
  {
    title: "Virtual Reality Tours",
    description: "Experience your proposed installations in immersive VR before implementation.",
    icon: "icons/vr.svg"
  },
  {
    title: "Cost-Effective Planning",
    description: "Reduce errors and optimize resources with our detailed 3D modeling and planning services.",
    icon: "icons/cost-effective.svg"
  },
  {
    title: "Expert Implementation",
    description: "Our team of experts assists in seamlessly implementing the planned upgrades.",
    icon: "icons/implementation.svg"
  },
  {
    title: "Time-Saving Solutions",
    description: "Streamline your planning and implementation process, saving valuable time and resources.",
    icon: "icons/time-saving.svg"
  },
  {
    title: "Customized Approach",
    description: "We tailor our services to meet the unique needs of your industrial project.",
    icon: "/icons/customization.svg"
  }
]

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
      <section id="home">
        <Hero 
          headline="Digitize Your Industrial Installations"
          subheadline="Expert 3D modeling solutions for your business"
          videoSrc="/videos/hero-background.mp4"
        />
      </section>
      <section id="benefits">
        <Benefits benefits={benefits} />
      </section>
      <section id="model" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Interactive 3D Model</h2>
          <div className="max-w-4xl mx-auto">
            <ModelViewer modelPath="/models/industrial_installation.glb" />
          </div>
        </div>
      </section>
      <section id="testimonials">
        <Testimonials testimonials={testimonials} />
      </section>
      <section id="cta">
        <CTA 
          headline="Ready to Transform Your Industrial Planning?"
          subheadline="Book a demo today and see how our 3D modeling solutions can revolutionize your operations."
          buttonText="Book a Demo"
        />
      </section>
    </>
  )
}
