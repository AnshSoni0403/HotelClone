"use client"

import { motion } from "framer-motion"
import { MapPin, Star, Users, Calendar } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

interface LocationCard {
  name: string
  state: string
  image: string
  rating: number
  description: string
  attractions: string[]
  bestTime: string
  popularWith: string
}

const indianLocations: LocationCard[] = [
  {
    name: "Goa",
    state: "Goa",
    image: "/img/11.jpg?height=300&width=400",
    rating: 4.8,
    description:
      "Golden beaches, Portuguese heritage, and vibrant nightlife make Goa India's premier beach destination.",
    attractions: ["Baga Beach", "Old Goa Churches", "Dudhsagar Falls", "Spice Plantations"],
    bestTime: "Nov - Feb",
    popularWith: "Beach Lovers",
  },
  {
    name: "Udaipur",
    state: "Rajasthan",
    image: "/img/12.jpg?height=300&width=400",
    rating: 4.9,
    description: "The City of Lakes offers royal palaces, stunning architecture, and romantic boat rides.",
    attractions: ["City Palace", "Lake Pichola", "Jag Mandir", "Saheliyon Ki Bari"],
    bestTime: "Oct - Mar",
    popularWith: "Heritage Enthusiasts",
  },
  {
    name: "Munnar",
    state: "Kerala",
    image: "/img/13.jpg?height=300&width=400",
    rating: 4.7,
    description: "Rolling tea gardens, misty mountains, and cool climate create a perfect hill station retreat.",
    attractions: ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam", "Top Station"],
    bestTime: "Sep - May",
    popularWith: "Nature Lovers",
  },
  {
    name: "Rishikesh",
    state: "Uttarakhand",
    image: "/img/14.jpg?height=300&width=400",
    rating: 4.6,
    description: "Spiritual capital offering yoga retreats, adventure sports, and Ganges river experiences.",
    attractions: ["Laxman Jhula", "Beatles Ashram", "River Rafting", "Triveni Ghat"],
    bestTime: "Feb - May, Sep - Nov",
    popularWith: "Spiritual Seekers",
  },
  {
    name: "Shimla",
    state: "Himachal Pradesh",
    image: "/img/15.jpg?height=300&width=400",
    rating: 4.5,
    description: "Colonial charm meets mountain beauty in this popular hill station with scenic toy train rides.",
    attractions: ["Mall Road", "Jakhu Temple", "Christ Church", "Toy Train"],
    bestTime: "Mar - Jun, Sep - Nov",
    popularWith: "Families",
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    image: "/img/16.jpg?height=300&width=400",
    rating: 4.8,
    description: "The Pink City showcases magnificent forts, palaces, and vibrant markets steeped in royal history.",
    attractions: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar"],
    bestTime: "Oct - Mar",
    popularWith: "History Buffs",
  },
]

export default function IndianLocations() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Discover India's Finest Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From royal palaces to serene beaches, explore India's diverse landscapes and rich cultural heritage with our
            premium hotel locations across the country.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indianLocations.map((location, index) => (
            <ScrollAnimation key={location.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{location.rating}</span>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {location.state}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{location.name}</h3>
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">{location.description}</p>

                  {/* Attractions */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Top Attractions</h4>
                    <div className="flex flex-wrap gap-1">
                      {location.attractions.slice(0, 3).map((attraction) => (
                        <span key={attraction} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                          {attraction}
                        </span>
                      ))}
                      {location.attractions.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          +{location.attractions.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Info Row */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{location.bestTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{location.popularWith}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Explore {location.name}
                  </button>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimation delay={0.6} className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore India?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Book your stay at any of our premium locations and experience the best of Indian hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                View All Locations
              </button>
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Plan Your Journey
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
