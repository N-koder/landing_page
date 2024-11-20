import React from 'react'
import { Element } from 'react-scroll'
import { faq } from '../constants/index'
import Frequentquestions from '../Components/Frequentquestions'

const Faq = () => {
  return (
    <section>
        <Element name = "faq" className="relative">

            <div className='container relative z-2 py-28'>            
                <div>
                    <h3 className='text-p4 h3 max-md:h5 max-lg:max-w-md max-w-640 mb-7'>
                        Curiosity didn't kill the cat.
                    </h3>
                    <p className='body-1 max-lg:max-w-sm'>
                        You've found questions, we've found answers.
                    </p>
                </div>

                {/* line design */}
                <div className='absolute faq-line_after bg-s3 w-0.5 h-full -z-1 top-0 left-[calc(50%-1px)]'/>
            </div>

            <div className='faq-glow_before relative bg-s1 z-2 border-2 border-s3'>
                <div className='container flex gap-10 max-lg:block'>
                    <div className='absolute z-4 rounded-half -top-10 left-[calc(50%-40px)] size-20 flex items-center justify-center bg-s1 '>
                        <img src = '/images/faq-logo.svg' alt = 'logo' className='size-1/2'/>
                    </div>

                    <div className='relative flex-1 pt-24'>
                        {faq.slice(0 , Math.floor(faq.length/2)).map((askedques,index) =>  (
                            <Frequentquestions key={askedques.id} ques={askedques} index={index}/>
                        ))}
                    </div>

                    <div className='relative flex-1 pt-24'>
                        {faq.slice(Math.floor(faq.length/2)).map((askedques,index) =>  (
                            <Frequentquestions key={askedques.id} ques={askedques} index={Math.floor(faq.length/2) + index}/>
                        ))}
                    </div>
                </div>

                    <div className='faq-line_after absolute left-[calc(50%-1px)] top-0 h-full -z-1 w-0.5 bg-s3 max-lg:hidden'/>

            </div>

        </Element>
    </section>
  )
} 

export default Faq