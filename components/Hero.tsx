import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

const Hero = (props: Props) => {
    const [text, count]=useTypewriter({
        words:[
            "Hi, My Name is Sifuna Donnex",
            "I am a Full Stack Developer",
            "<ButLovesToCode/>",
        ],
        loop:true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image 
        src={'/profile.jpeg'}
        alt='Sifuna Donnex'
        width={200}
        height={200}
        className='rounded-full relative h-32 w-32 mx-auto object-cover'
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web Developer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold '>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>
            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero