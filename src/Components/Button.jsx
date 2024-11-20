import clsx from 'clsx'
import React from 'react'
import Marker from './Marker'


const Button = ({ icon, href, children, onclick, markerfill }) => {

    // react immideate return function
    const Inner = () => (
    
        <>
            <span className='rounded-xl flex items-center g4 px-4 min-h-[47px] relative inner-before group-hover:before:opacity-100 overflow-hidden'>
                <span className='absolute -left-[1px]'>
                    <Marker markerFill = {markerfill}/>
                </span>

                {icon && (
                    <img src = {icon} alt='icon' className='mr-5 object-contain size-10 z-10'/>
                )}

                <span className='realtive z-2 font-poppins text-[#2EF2FF] base-bold'>{children}</span>
            </span>

            <span className='glow-before glow-after'></span>

        </>    
    
    )


    return href ? (
        <a className={clsx('g5 p-0.5 rounded-xl group shadow-500 relative')} href={href}>

            <Inner/>

        </a>

    ) : (
        <button className={clsx('g5 p-0.5 rounded-xl group shadow-500 relative')} onClick={onclick}>

            <Inner/>
        
        </button>
    )
}

export default Button