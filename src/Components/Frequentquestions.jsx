import clsx from 'clsx'
import React, { useState } from 'react'
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';



const Frequentquestions = ({ques , index}) => {

  const [activeQues, setactiveQues] = useState(null);

  const active = activeQues === ques.id; 

  return (
    <div className='relative z-2 mb-16'>
      <div className='flex group relative items-center justify-center cursor-pointer gap-10 px-7' onClick={()=>{setactiveQues(activeQues === ques.id ? null : ques.id)}}>

        <div className="flex-1">

          {/* <div className="small-compact mb-1.5 text-mp3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div> */}

          <div className={clsx('h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center', active && 'max-lg:text-s2' )}>
            {ques.question}

          </div>
          
        </div>
        
        <div className={clsx('faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4', active && 'before:bg-p1 after:rotate-0 after:bg-p1')}>
          <div className='rounded-full size-11/12 g4 shadow-300'/>
        </div>

      </div>



      <SlideDown>
        {activeQues === ques.id && (
          <div className='px-7 py-3.5 body-3'>{ques.answer}</div>
        )

        }
      </SlideDown>


      <div className={clsx('absolute g4 -bottom-7 -top-7 left-0 right-0 -z-1 roundex-xl opacity-0 transition-opacity duration-300' , active && 'opacity-100')}>
      
        <div className='absolute g4 inset-0.5 -z-1 rounded-xl'/>
        
        <div className='absolute w-40 h-0.5 bg-p3 left-8 top-0' />
      
      </div>
    </div>
  )
}

export default Frequentquestions