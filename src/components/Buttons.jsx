import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HoverBtn = ({link}) => {
  return (
    <Link to={link} className='bg-black'>Buttons</Link>
  )
}
const HoverArrowBtn = ({link="/", text="Button"}) => {
  return (
    <Link to={link} className='bg-black text-white px-4 py-3 rounded-[1.1rem] font-syne font-semibold flex gap-3 items-center hover:bg-[#6754E9] transition-colors duration-300 group uppercase h-fit w-fit'>
       <span className='underline-light-blue-on-hover text-[12px] font-bold'>
        {text}
        </span> 
         <FaArrowRight />
         </Link>
  )
}
const HoverIconBtn = ({icon}) => {
  return (
    <div>Buttons</div>
  )
}

export {HoverBtn, HoverArrowBtn, HoverIconBtn}