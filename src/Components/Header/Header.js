import React, { useEffect, useState } from 'react';
import CustomeLink from '../CustomeLink/CustomeLink';
import { BsList, BsFillBackspaceReverseFill } from 'react-icons/bs'

const Header = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth,setScreenWidth]=useState(window.innerWidth);
    useEffect(()=>{
        const changeWidth=()=>{
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize',changeWidth);
        return()=>{
            window.removeEventListener('resize',changeWidth)
        }
    },[]);
    return (
        <nav className=' fs-2 bg-primary'>
            
                 {(open||screenWidth>576) && (<div className='d-flex justify-content-center' >
                 <CustomeLink className="me-3 text-white " to='/'>Home</CustomeLink>

                  <CustomeLink className="me-3 text-white " to='/about'>About</CustomeLink>

                  <CustomeLink className='text-white ' to='/contact '>Contact</CustomeLink>
                  </div>)}
               <div onClick={() => setOpen(!open)}          className='d-sm-none'>
                   {open ? <BsFillBackspaceReverseFill></BsFillBackspaceReverseFill> : <BsList></BsList>}
             </div>
              
            

        </nav>
    );
};

export default Header;