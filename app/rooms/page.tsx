"use client"

import { motion } from "framer-motion"
import { Wifi, Car, Coffee, Waves, Dumbbell, Users, Bed, Bath, Tv, Shield } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import ImageSlider from "@/components/image-slider"

export default function RoomsPage() {
  const roomTypes = [
    {
      name: "Standard Room",
      price: "Rs20,000",
      image: "/img/17.jpg?height=400&width=600",
      features: ["King Size Bed", "City View", "Free Wi-Fi", "Mini Bar", "Air Conditioning"],
      amenities: [Bed, Wifi, Tv, Coffee],
      description:
        "Comfortable and elegantly designed rooms perfect for business travelers and couples seeking quality accommodation.",
    },
    {
      name: "Deluxe Suite",
      price: "Rs25,000",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Separate Living Area", "Ocean View", "Premium Amenities", "Room Service", "Balcony"],
      amenities: [Bed, Wifi, Tv, Coffee, Bath],
      description:
        "Spacious suites with separate living areas, premium furnishings, and breathtaking views for an enhanced experience.",
    },
    {
      name: "Presidential Suite",
      price: "Rs.40,000",
      image: "/placeholder.svg?height=400&width=600",
      features: ["2 Bedrooms", "Private Terrace", "Butler Service", "Jacuzzi", "Dining Area"],
      amenities: [Bed, Wifi, Tv, Coffee, Bath, Users],
      description:
        "The ultimate luxury experience with expansive living spaces, premium services, and unparalleled comfort.",
    },
  ]

  const services = [
    {
      icon: Coffee,
      title: "Room Service",
      description: "24/7 in-room dining with gourmet meals delivered to your door",
      features: ["24/7 Availability", "Gourmet Menu", "Special Dietary Options", "Express Service"],
    },
    {
      icon: Waves,
      title: "In-House Restaurant",
      description: "Award-winning dining experiences with international and local cuisine",
      features: ["Fine Dining", "International Cuisine", "Wine Selection", "Private Dining"],
    },
    {
      icon: Waves,
      title: "Spa & Wellness",
      description: "Rejuvenate your body and mind with our premium spa treatments",
      features: ["Massage Therapy", "Facial Treatments", "Sauna & Steam", "Wellness Programs"],
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "High-speed internet access throughout the hotel premises",
      features: ["High-Speed Connection", "Business Center", "Meeting Rooms", "Tech Support"],
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Complimentary valet parking service for all guests",
      features: ["24/7 Valet Service", "Secure Parking", "Car Wash Service", "Airport Transfers"],
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art fitness facilities open 24/7",
      features: ["Modern Equipment", "Personal Training", "Group Classes", "Pool Access"],
    },
  ]

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Rooms & Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto"
          >
            Discover our luxurious accommodations and world-class services designed to exceed your expectations
          </motion.p>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Room Types</h2>
            <p className="text-xl text-gray-600">Choose from our carefully curated selection of rooms and suites</p>
          </ScrollAnimation>

          <div className="space-y-16">
            {roomTypes.map((room, index) => (
              <ScrollAnimation key={room.name} delay={index * 0.2}>
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
                >
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <ImageSlider
                        images={[
                          "img/17.jpg?height=400&width=600",
                          "img/18.jpg?height=400&width=600",
                          "/img/19.jpg?height=400&width=600",
                        ]}
                        autoPlay={true}
                        interval={4000}
                        className="h-96"
                      />
                      <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-bold text-lg z-10">
                        {room.price}/night
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{room.name}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{room.description}</p>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Room Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {room.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h4>
                      <div className="flex space-x-4">
                        {room.amenities.map((Icon, iconIndex) => (
                          <div
                            key={iconIndex}
                            className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center"
                          >
                            <Icon className="w-6 h-6 text-amber-600" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
                      Book This Room
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hotel Services</h2>
            <p className="text-xl text-gray-600">Comprehensive services to make your stay exceptional</p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={service.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Services</h2>
            <p className="text-xl text-gray-600">Extra conveniences for your comfort</p>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Security", desc: "24/7 security service" },
              { icon: Users, title: "Concierge", desc: "Personal assistance" },
              { icon: Car, title: "Airport Transfer", desc: "Complimentary shuttle" },
              { icon: Tv, title: "Entertainment", desc: "Premium channels" },
            ].map((service, index) => (
              <ScrollAnimation key={service.title} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Luxury?</h2>
            <p className="text-xl mb-8 text-amber-100">
              Book your preferred room today and enjoy our exceptional services
            </p>
            <button className="bg-white text-amber-900 hover:bg-amber-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
