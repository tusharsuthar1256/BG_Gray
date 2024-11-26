import React, { useContext, useEffect, useState } from 'react'
import { BsMoonStars } from 'react-icons/bs'
import { UserContext } from '../utils/UserProvider';
import { Link, useNavigate } from 'react-router-dom';

function Nav({onclick}) {

     const {user} = useContext(UserContext);
     const [darkMode, setDarkMode] = useState(false);

     useEffect(() => {
       // Apply or remove the dark class on the <html> element
       if (darkMode) {
         document.documentElement.classList.add('dark');
       } else {
         document.documentElement.classList.remove('dark');
       }
     }, [darkMode]);
     return (
          <>
           <nav className="flex justify-between items-center h-[70px] px-3 lg:px-10 bg-black text-white dark:bg-white dark:text-black">
    <h1 className="text-2xl" ><Link to='/'>BG-Gray</Link></h1>

    <div className="flex justify-center items-center gap-5">
      <button className="text-black hover:text-grey bg-white hover:bg-[#e2e2e0] p-2 rounded-md dark:text-white dark:bg-black" onClick={() => setDarkMode(!darkMode)}>
        <BsMoonStars />
      </button>
      {user ?    <button
        onClick={onclick}
        className="text-black hover:text-grey bg-white hover:bg-[#e2e2e0] py-1.5 px-2 rounded-md dark:text-white dark:bg-black"
      >
        Sign out
      </button> : null}
   
    </div>

  </nav>
  <div className="h-[1px] w-full bg-white dark:bg-black"></div>
          </>
     )
}

export default Nav;
