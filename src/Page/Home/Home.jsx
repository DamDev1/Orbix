import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Showcase from '../../Components/Showcase/Showcase'
import SubShowcase from '../../Components/SubShowcase/SubShowcase'
import Calm from '../../Components/Calm/Calm'
import Footer from '../../Components/Footer/Footer'


export default function Home() {
  return (
    <section>
        <Header/>
        <Hero/>
        <Showcase/>
        <SubShowcase/>
        <Calm/>
        <Footer/>
    </section>
  )
}
