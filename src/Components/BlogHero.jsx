import React from 'react'
import { HeroBg } from '../assets/assets'
import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'


const BlogHero = () => {
  return (
    <div>
     <section className="relative w-full h-auto min-h-[70vh]  sm:h-screen  flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-8  sm:pt-16 pb-6">
            <img className="  hidden md:block absolute -z-10 top-0 left- w-full h-full" src={HeroBg} alt="" />
          <h2 className="text-4xl font-space font-semibold md:text-5xl  leading-tight text-black-800">
            <motion.div
      initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block">
            <span className="bg-gradient-to-r from-[#6c44bd]  pl-7">
              Creativity,  
            </span>{" "}
            Captured
            <span className="bg-gradient-to-r to-[#FF960B] pr-9">
            {" "}in Words  
            </span>{" "}
            </motion.div>
          </h2>
          

          <p className="mt-7 text-lg text-gray-600">
                  <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className=" text-gray-500"
      >
           Stay updated with insights, trends, and thought pieces from the <br />
            minds behind our visual work.
            </motion.p>
          </p>

          {/* Scroll Down Indicator */}
          <div className="flex justify-center items-center">
            <div className="w-10 h-10 absolute bottom-10 rounded-full bg-black flex items-center justify-center animate-bounce">
              <span className="text-white">
                <FaArrowDown size={15} />
              </span>
            </div>  
          </div>
      </section> 
    </div>
  )
}

export default BlogHero