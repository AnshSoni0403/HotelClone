"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star, Wifi, Car, Utensils, Waves, Dumbbell, Coffee } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import SplashScreen from "@/components/splash-screen"
import ImageSlider from "@/components/image-slider"
import IndianLocations from "@/components/indian-locations"

export default function HomePage() {
  return (
    <>
      <SplashScreen />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/img/1.jpg')`,
            }}
          />

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Welcome to Luxury
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.7 }}
              className="text-2xl md:text-3xl font-light mb-8 text-amber-200"
            >
              Comfort. Luxury. Experience Redefined.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.9 }}
              className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            >
              Discover unparalleled elegance and world-class hospitality at Freelance Axis Grand Hotel, where every
              moment is crafted to perfection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/rooms"
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Explore Rooms</span>
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </section>

        {/* Welcome Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollAnimation className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to Freelance Axis Grand Hotel
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Nestled in the heart of the city, our hotel offers an oasis of tranquility and sophistication. With
                meticulously designed spaces, exceptional service, and world-class amenities, we create unforgettable
                experiences for discerning travelers.
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <ScrollAnimation delay={0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">5-Star Service</h3>
                  <p className="text-gray-600">
                    Experience unmatched hospitality with our dedicated staff committed to exceeding your expectations.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Utensils className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Fine Dining</h3>
                  <p className="text-gray-600">
                    Savor exquisite cuisine crafted by world-renowned chefs using the finest local and international
                    ingredients.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.6}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Waves className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Spa & Wellness</h3>
                  <p className="text-gray-600">
                    Rejuvenate your mind and body at our award-winning spa with premium treatments and facilities.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Highlights Section with Image Slider */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollAnimation className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hotel Highlights</h2>
              <p className="text-xl text-gray-600">Discover what makes your stay extraordinary</p>
            </ScrollAnimation>

            {/* Image Slider */}
            <ScrollAnimation className="mb-16">
              <ImageSlider
                images={[
                  "/img/2.jpg?height=500&width=800",
                  "/img/4.jpg?height=500&width=800",
                  "/img/5.jpg?height=500&width=800",
                  "/img/6.jpg?height=500&width=800",
                  "/img/7.jpg?height=500&width=800",
                ]}
                autoPlay={true}
                interval={5000}
                className="max-w-4xl mx-auto"
              />
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Rooms */}
              <ScrollAnimation delay={0.2}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <img
                      src="/img/8.jpg?height=300&width=400"
                      alt="Luxury Room"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Rooms</h3>
                    <p className="text-gray-600 mb-6">
                      Elegantly appointed rooms and suites featuring premium amenities, stunning views, and
                      sophisticated design elements for the ultimate comfort.
                    </p>
                    <Link
                      href="/rooms"
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold"
                    >
                      Explore Rooms <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Dining */}
              <ScrollAnimation delay={0.4}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <img
                      src="/img/9.jpg?height=300&width=400"
                      alt="Fine Dining"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Fine Dining</h3>
                    <p className="text-gray-600 mb-6">
                      Indulge in culinary excellence at our signature restaurants, offering diverse cuisines and
                      exceptional dining experiences in elegant settings.
                    </p>
                    <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold">
                      View Menus <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Amenities */}
              <ScrollAnimation delay={0.6}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <img
                      src="/img/10.jpg?height=300&width=400"
                      alt="Hotel Amenities"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Amenities</h3>
                    <p className="text-gray-600 mb-6">
                      Enjoy world-class facilities including spa, fitness center, pool, business center, and concierge
                      services designed for your convenience.
                    </p>
                    <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold">
                      View Amenities <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollAnimation className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-xl text-gray-600">Everything you need for a perfect stay</p>
            </ScrollAnimation>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Wifi, title: "Free Wi-Fi", desc: "High-speed internet throughout the hotel" },
                { icon: Car, title: "Valet Parking", desc: "Complimentary parking with valet service" },
                { icon: Coffee, title: "Room Service", desc: "24/7 in-room dining service" },
                { icon: Dumbbell, title: "Fitness Center", desc: "State-of-the-art gym facilities" },
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

        {/* Indian Locations Section */}
        <IndianLocations />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for an Unforgettable Experience?</h2>
              <p className="text-xl mb-8 text-amber-100">
                Book your stay today and discover why guests choose Freelance Axis Grand Hotel for their most important
                moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-amber-900 hover:bg-amber-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Book Your Stay</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  href="/contact"
                  className="border-2 border-white hover:bg-white hover:text-amber-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </>
  )
}
