import React from 'react'
import { socials } from '../constants/index'

const Footer = () => {
  return (
    <footer>
        <div className='container py-10'>
            <div className='flex w-full max-md:flex-col'>
                <div className='small-compact flex flex-1 items-center justify-center flex-wrap gap-5'>
                    <p className='opacity-70'>Copyright, XORA </p>
                    
                </div>
                <div className='flex  items-center jusity-center  sm:ml-auto'>
                        <p className='legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p3'>privacy policy</p>
                        <p className='text-p5 transition-all duration-500 hover:text-p3'>Terms & conditions</p>
                </div>

                <ul className='flex flex-1 justify-center gap-3 max-md:mt-10 max-md:justify-end'>
                    
                    {socials.map(({id , url, icon, title}) => (
                       
                       <li key ={id}> 
                            
                            <a href={url} className='social-icon'>
                                <img src = {icon} className='size-1/3 object-contain'/>

                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer