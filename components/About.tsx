import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img 
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration: 1.5,
        }}
        whileInView={{ opacity: 1, x:0 }}
        viewport={{ once: true }}
        src="/profile.jpeg"
        alt='Sifuna Donnex'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[400px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a{"  "}
                <span className='underline decoration-[#F7AB0A]/50'>little<span>{" "}background</span></span>
            </h4>
            <p>
                I am a Full Stack Developer with a passion for building web applications. I am currently a student at Strathmore University pursuing a Bachelor's Degree in Computer Science. I am also a self-taught developer with a passion for learning new technologies and building applications. I am currently looking for an internship or a junior role in a company where I can learn and grow.
            </p>
        </div>
    </motion.div>
  )
}