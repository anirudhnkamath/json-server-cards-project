import React from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const Navbar = ({content}) => {

  useGSAP(()=>{
    gsap.from('.navbar',{
      y:'-100%',
      duration: 0.5,
      ease: 'power2.out'
    })
  })

  return (
    <section className="navbar">
        <h1>{content}</h1>
    </section>
  )
}

export default Navbar
