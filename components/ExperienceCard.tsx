import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex mt-[100px] flex-col rounded-lg  items-center  space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:mt-[300px] xl:w-[900px] snap-center bg-[#292929]  p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            initial={{opacity: 0,y:-100}}
            transition={{duration: 1.5}}
            whileInView={{opacity: 1,y:0}}
            viewport={{once: true}}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src='https://avatars.githubusercontent.com/u/55757423?v=4'
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>CEO of SELF</h4>
            <p className='font-bold text-2xl mt-1'>SIFUNA</p>
            <div className='flex space-x-2 my-2'>
                <motion.img 
                className='h-10 w-10 rounded-full '
                src='https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png'
                />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work.. - Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-sm'>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard