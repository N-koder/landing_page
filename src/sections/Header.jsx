import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'






const Header = () => {

  const [isopen , setisopen] = useState(false);
  const [navbarup , setnavbarup] = useState(false);


  useEffect(() => {
    
    const handleScroll = () =>{
      setnavbarup(window.scrollY > 32);
    };

    window.addEventListener('scroll' , handleScroll);

    return () => {
      window.removeEventListener('scroll' , handleScroll);
    }


  }, [])
  

  const NavLinks = ({ tab }) => (
    <LinkScroll 
      to = {tab}
      offset = {-100} 
      spy 
      smooth
      activeClass='nav-active' 
      className='base-bold  text-p4 hover:text-p1 cursor-pointer transition-colors duration-500 max-lg:my-4 max-lg:h5'
      
      onClick={()=> setisopen(false)}

      >
      {tab}
    </LinkScroll>
  )

  return (
    <header className={clsx('fixed w-full z-50 py-10 left-0 top-0 max-lg:py-4 transition-all duration-500' , navbarup && 'py-2 bg-s5 backdrop-blur-[8px]')}>
      <div className='container flex items-center h-14 max-lg:px-5'>
        <a className='cursor-pointer flex-1 lg:hidden z-2'>
          <img src='/images/xora.svg' alt='logo' width={113} height={113} />
        </a>

        <div className={
          
            clsx("w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s5 max-lg:opacity-0", 
            
            isopen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none',  
          
          )}>


          <div className='max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:relative max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
            <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
              <ul className='flex max-lg:block max-lg:px-12'>
                <li className='nav-li'>
                  <NavLinks tab='features' />
                  <div className='dot' />
                  <NavLinks tab='pricing' />
                </li>

                {/* logo */}
                <li className='nav-logo'>
                  <LinkScroll to = 'hero' offset={-100} spy smooth className={
                    
                    clsx('max-lg:hidden transition-transform duration-500 ')
                  
                  }>
                  
                    <img src='/images/xora.svg' alt='logo' width={160} height={55} />
                  
                  </LinkScroll>
                </li>

                <li className='nav-li'>
                  <NavLinks tab='faq' />
                  <div className='dot' />
                  <NavLinks tab='download' />
                </li>
              </ul>
            </nav>



            <div className='lg:hidden block absolute w-[960px] h-[380px] top-1/2 left-0 translate-x-[-290px] -translate-y-1/2 rotate-90'>
              <img 
                src='/images/bg-outlines.svg' 
                width={960}
                height={380}

                className='relative z-2'
              />

              <img 
                src='/images/bg-outlines-fill.png' 
                width={960}
                height={380}
                
                className='absolute inset-0 mix-blend-soft-light opacity-5'

              />
            </div>



          </div>
        </div>


        {/* hamburger button */}
        <button className='lg:hidden size-10 border-2 border-s4 z-2 rounded-full flex justify-center items-center ' 

        onClick={() => setisopen(previousState => !previousState)}
        
        >

          <img src= {`/images/${isopen ? 'close' : 'magic'}.svg`} alt="menu" className='size-1/2 object-contain'/>


        </button>
      </div>
    </header>
  )
}

export default Header