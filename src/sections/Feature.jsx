import React from 'react'
import { details, features } from '../constants/index'
import { Element } from 'react-scroll'
import Button from '../Components/Button'

const Feature = () => {
  return (
    // <div>Features</div>
    <section>
        <Element name = 'features'>
            <div className='container'>
                <div className='relative flex border-2 rounded-7xl border-s3 md:flex-wrap flex-nowrap max-md:flex-col md:overflow-hidden feature-after max-md:rounded-none max-md:border-none max-md:gap-3 md:g7'>

                    {features.map((item , key) => (
                      <div key = {key} className='realtive z-2 md:px-10 px-5 mb:pb-10 pb-5 flex-50 max-md:border-2 max-md:g7 max-md:border-s3 max-md:rounded-3xl max-md:flex-320'>
                        
                        <div className='w-full flex justify-start items-start'>

                          <div className='-ml-3 mb-12 flex justify-center items-center flex-col'>
                            <div className ='w-0.5 h-16 bg-p1'/>  
                            <img 
                              src={item.icon} 
                              className='size-28 object-contain' 
                              alt={item.title}
                            />

                          </div>
                        
                        </div>

                        <p className='caption mb-5 max-md:mb-6'>{item.caption}</p>

                        <h2 className='max-w-400 h3 text-p5 mb-7 max-md:mb-6 max-md:h5'>{item.title}</h2>

                        <p className='body-1 max-md:body-3 mb-9 max-md:mb-6'>{item.text}</p>

                        <Button icon = {item.button.icon}>{item.button.title}</Button>

                      </div>
                    ))}

                    
                    
                    <ul className='relative border-2 border-s3 flex-grow px-[5%] flex justify-around rounded-7xl max-md:hidden'>
                      {/* <div className='bg-s2 w-full h-[1px] absolute z-10 top-[38%] left-0 right-0'/> */}

                        {details.map((item , index)=> (
                          <li key = {index} className='relative pt-16 pb-14 px-4'>
                            {/* <div className='w-[1px] absolute top-8 bottom-0 left-1/2 bg-p1 h-full z-10'/> */}

                            <div className='flex items-center justify-center border-2 border-p2 rounded-full hover:border-s2 cursor-pointer size-20 mx-auto mb-3 transition-all duration-500 shadow-500'>
                              <img src = {item.icon} alt ={item.title} className='object-contain z-20 size-17/20'/>
                            </div>


                            <h3 className='relative base-small uppercase text-center z-2 max-w-36 mx-auto my-0'>{item.title}</h3>

                            
                          </li>
                        ))}

                    </ul>
                     
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Feature