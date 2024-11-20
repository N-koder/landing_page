import React from 'react'
import { testimonials } from '../constants/index'
import Testimitems from '../Components/Testimitems'

const Testimonials = () => {
  return (
    <section className='relative z-2 py-24 md:py-28 lg:py-40'>
        <div className='container block lg:flex'>
            <div className='testimonials_head-res flex-300 relative mr-20 z-2'>
                <p className='max-md:mb-2.5 small-2 mb-5 uppercase text-red-400'>Wall of love</p>
                <h3 className='h3 max-md:h5 text-p4'>Words from our people</h3>
            </div>

            <div className='testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block'>
                
                <div className='testimonials_group-after flex-50'>
                    {testimonials.slice(0, Math.floor(testimonials.length/2)).map((items)=>(
                        <Testimitems key = {items.id} testimonial = {items} containerClassName = "last:after:hidden  last:after:max-md:block"/>
                    ))}

                </div>

                <div className='flex-50'>
                    {testimonials.slice(Math.floor(testimonials.length/2)).map((items)=>(
                        <Testimitems key = {items.id} testimonial = {items} containerClassName = "last:after:hidden  after:right-auto after:left-0 after:max-md:-left-4 md:px-12"/>
                    ))}
                </div>
            
            </div>
        </div>
    </section>
  )
}

export default Testimonials