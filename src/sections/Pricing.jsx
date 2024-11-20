import clsx from 'clsx';
import React, { useState } from 'react'
import { Element } from 'react-scroll'

import {features, plans} from '../constants/index';
import CountUp from 'react-countup';
import Button from '../Components/Button';

const Pricing = () => {

    const [Annual, setAnnual] = useState(true);

  return (
    <section>
        <Element name='pricing'>

            <div className='container'>
                <div className='relative max-w-960 pricing-head_before  mx-auto   bg-s1 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16'>
                    
                    <h3 className='h3 z-3 relative text-center max-w-lg text-p5 max-sm:max-w-sm max-md:mb-11 mb-14 max-lg:h4 max-md:h5 mx-auto' >
                        Flexible prices for teams of all sizes
                    </h3>

                    <div className='relative border-[3px] border-s5 bg-s1 flex w-[375px] rounded-2xl p-3 backdrop-blur-[8px] mx-auto z-4 max-md:w-[310px]'>
                        <button 
                            onClick={()=> setAnnual(false)} 
                            className={clsx('pricing-head_btn' , !Annual && 'text-p5')} 
                        >
                        
                            Monthly
                        
                        </button>

                        <button 
                            onClick={()=> setAnnual(true)} 
                            className={clsx('pricing-head_btn' , Annual && 'text-p5')}    
                        >
                        
                            Annual
                        
                        </button>


                        <div 
                            className = {clsx('absolute w-[calc(50%-8px)] h-[calc(100%-16px)] g4 rounded-14 left-2 top-2 before:h-100 pricing-head_btn_before overflow-hidden shadow-400 transition-transform duration-500' , Annual && 'translate-x-full')}
                        />


                    </div>

                    {/* pricing cards background */}
                    <div className='pricing-bg'>
                        <img src = '/images/bg-outlines.svg' alt='' width={960} height={380} className='z-2 relative'/>

                        <img src = '/images/bg-outlines-fill.png' alt ='' width={960} height = {380} className ='absolute inset-0 opacity-5 mix-blend-soft-light'/>
                    </div>

                </div>

                {/* pricing cards */}
                <div className='flex items-start z-2 max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6  scroll-hide'>
                    {plans.map((item , index) => (
                        <div key = {index} className="relative pricing-plan_first pricing-plan_last pricing-plan_even pricing-plan_odd border-2 p-7 max-xl:min-w-80 max-xl:rounded-3xl xl:w-[calc(33.33%+2px)]">
                            {index === 1 && (
                                <div className='g4 absolute rounded-tl-3xl rounded-tr-3xl h-330 top-0 right-0 left-0 z-1' />
                            )}


                            <div className={clsx('absolute flex left-0 right-0 z-2 items-center justify-center' , index === 1 ? '-top-6' : '-top-6 xl:-top-11')}>
                                <img src = {item.logo} alt={item.title} className={clsx('object-contain drop-shadow-2xl' , index === 1 ? 'size-[120px]' : 'size-[88px]')}/>


                            </div>

                            <div className={clsx('relative flex flex-col items-center' , index===1 ? 'pt-24' : 'pt-12')}>
                                <div className={clsx('relative z-2 border-2 rounded-20 px-3 mx-auto mb-6  ' , index===1 ? 'border-s1 text-p1' : 'border-p1 text-s2')}>
                                    {item.title}
                                </div>


                                <div className='flex items-center justify-center z-2'>

                                    <div className={clsx('flex h-num items-start' , index === 1 ? 'text-p1' : 'text-p4')}>
                                        
                                        $<CountUp 
                                            start={item.priceMonthly}
                                            end = {Annual ? item.priceYearly : item.priceMonthly}

                                            duration={0.4}
                                            preserveValue
                                            useEasing={false}
                                        />


                                    </div>

                                    <div className='small-1 relative uppercase top-3 ml-1'>
                                        {Annual ? '/yr' : '/mo'}
                                    </div>
                                </div>

                            </div>


                            <div className={clsx('relative z-2 body-1 text-center w-full pb-9 border-b-s1 text-p4 mb-10' , index === 1 && 'border-b')}>{item.caption}</div>
                            
                            <ul className='mx-auto xl:px-7 space-y-4'>
                                {item.features.map((fea , i) => (
                                    <li key = {i} className='relative flex items-center gap-5'>
                                        <img src = '/images/check.png' className='size-10 object-contain'/>
                                        <p className='flex-1'>{fea}</p>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className='w-full flex justify-center mt-10'>
                                <Button icon={item.icon} >Get Start</Button>
                            </div>
                            
                            
                            {index === 1 && <p className="small-compact mt-9 text-center text-p1 before:mx-2 before:content-['-'] after:mx-2 after:content-['-']">Limited period offer</p>}


                        </div>
                    ))}
                </div>

                
            </div>

        </Element>
    </section>
  )
}

export default Pricing