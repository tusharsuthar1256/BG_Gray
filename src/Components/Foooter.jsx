import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FiLinkedin } from 'react-icons/fi'

function Foooter() {
     return (
          <>
                <footer className="h-[70px] w-full flex justify-between items-center px-3 lg:px-10">
        <div >
          <a  href="https://linkedin.com/in/tushar-suthar-469163260" target="_blank">
          
          <button className="text-black hover:text-grey bg-white hover:bg-[#e2e2e0] p-2 rounded-md dark:text-white dark:bg-black mr-5" ><FiLinkedin size={20}/></button>
          </a>
          <a href="https://x.com/TusharS08423915" target="_blank">
          <button className="text-black hover:text-grey bg-white hover:bg-[#e2e2e0] p-2 rounded-md dark:text-white dark:bg-black"><BsTwitterX size={20}/></button>
          </a>
        </div>
        <div>Created by Tushar Suthar</div>
      </footer>
          </>
     )
}

export default Foooter
