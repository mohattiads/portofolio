
import React from 'react'

const WorkItem = ({years,duration,title,details}) => {
  return (
   <div className='my-10'>
     <ol className='flex flex-col lg:flex-row relative border-l border-stone-200w  md:hover:m-20 transition-all ease-in-out p-10 duration-300 '>
       <li className='mb-8 ml-4'>
        <div className='  absolute w-3 h-3 bg-purple-500 rounded-full mt-1.5 -left-1.5 border-white'>
        </div>  
        <p className='flex  flex-wrap gap-4 flex-row  items-center justify-start text-xs md:text-xs  '>
           <span className=' inline-block px-2 py-1 font-semibold rounded-full text-white bg-purple-800 '>{years}</span>
           <span className=' text-lg font-semibold text-purple-700 '>{title}</span>
           <span className='my-2 text-[14.4px] text-stone-500 font-normal leading-none hover:underline '>{duration}</span>
          </p>
          <p className='my-2 text-base font-normal text-stone-500'>  {details}</p>
          
         </li>
     </ol>
   </div>
  )
}

export default WorkItem
