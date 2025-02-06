"use client"

import React, { useState } from 'react'

const Carousel = ({ images }) => {
  const defaultImages = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
  ]

  const carouselImages = images || defaultImages
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 p-6 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e] flex items-center justify-center">
      <div className="relative max-w-4xl w-full bg-white/90 backdrop-blur-md shadow-2xl p-8 rounded-2xl dark:bg-gray-800/90">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500">
          Beautiful Carousel ✨
        </h2>
        <div className="relative overflow-hidden rounded-lg">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${carouselImages.length * 100}%` }}>
            {carouselImages.map((image, index) => (
              <div key={index} className="w-full flex flex-shrink-0 justify-self-center items-center">
                <img src={image} alt={`Slide ${index + 1}`} className="w-3/6 h-full object-cover" />
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-600 text-white p-2 rounded-full shadow-lg dark:bg-blue-500">
            &#10094;
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-600 text-white p-2 rounded-full shadow-lg dark:bg-blue-500">
            &#10095;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
