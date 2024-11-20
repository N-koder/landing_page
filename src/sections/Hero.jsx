import React from 'react'
import { Element, Link as LinkScrollTo } from 'react-scroll'
import Button from '../Components/Button'

const Hero = () => {
  return (
    <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>

      {/* scrollable div */}
      <Element name = "hero">
        <div className='container'>
          <div className='relative z-2 max-w-512 max-lg:max-w-388'>
            <div className='mb-5 small-2 uppercase text-p1'>
              Video Editing
            </div>
            <h1 className='mb-6 h1 max-lg:mb-7 max-lg:h2 text-p5 max-md:mb-4 max-md:text-5xl max-md:leading-12'>Amazingly Simple</h1>

            <p className='mb-14 body-1 max-w-440 max-md:mb-10'>We design XORA AI video editor to be an eassy to use , Quick to learn, and surprisingly powerful</p>

            <LinkScrollTo to="features" offset={-100} spy smooth>
              {/* try it now button */}
              <Button icon = '/images/zap.svg'>Try it now</Button>
            </LinkScrollTo>

          </div>

          {/* bacground cover image */}
          <div className='absolute -top-32 left-[calc(50%-340px)] w-[1230px] hero-img_res pointer-events-none'>
            <img src = "/images/hero.png" alt='bg-cover' className='size-1230 max-lg:h-auto'/>
          </div>

        </div>
      </Element>

    </section>
  )
}

export default Hero