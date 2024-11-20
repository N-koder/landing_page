import clsx from 'clsx'
import React from 'react'

const Testimitems = ({testimonial , containerClassName}) => {
  return (
    <div className = {clsx("relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s3 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4" , containerClassName,)}>

        

        <div className='flex items-center max-xl:-mr-8'>
            <div className='mr-4 shrink-0 rounded-half size-20 border-2 border-s3 p-1.5'>
                <img  src = {testimonial.avatarUrl} alt = {testimonial.name} className='size-full object-cover'/>
            </div>

            <div>
                <h4 className='mb-0.5 text-p3 body-2'>{testimonial.name}</h4>
                <p className='small-compact uppercase text-s2'>{testimonial.role}</p>
            </div>
        </div>

        <blockquote className='h6 text-p4 mb-8'>
            {testimonial.comment}
        </blockquote>

    </div>
  )
}

export default Testimitems