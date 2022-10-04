/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5]
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project,i) => (
                // eslint-disable-next-line react/jsx-no-comment-textnodes
                <div className='w-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    
                    <motion.img
                        // initial={{opacity: 0,y:-300}}
                        // transition={{duration: 1.2}}
                        // whileInView={{opacity: 1,y:0}}
                        // viewport={{once:true}}
                    src="https://i.pinimg.com/564x/40/94/e8/4094e8e095102be3213c4606014a3638.jpg" alt="" />

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'><span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {projects.length}</span>{" "}: UPS clone</h4>
                        <p className='text-lg text-center md:text-left'>
                            Netflix 2.0 app built with React, Redux, and Firebase.
                            This app is a clone of the Netflix app. It is built with React, Redux, and Firebase. It uses the TMDB API to fetch movies and TV shows. It also uses Firebase for authentication and storing user data. It is fully responsive and works on all devices.

                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]-skew-y-12'></div>
    </div>
  )
}

export default Projects