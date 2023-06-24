import React from "react";
import CodeHome from "./CodeHome";
import "../App.css"
function navbar() {
  return (
  <>
    <div className='land'>
      <div className='Menu'>
        
<nav class="bg-gradient-to-b from-zinc-600 to-zinc-1000 bg-gradient-to-r">
  <div class="max-w-screen-l flex flex-wrap items-center bg-opacity-60 justify-between mx-6 p-6 ">
  <div class="flex items-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-qlt1i1iQuAIj8izumaWb4QHQyrPf7PWuHZPQZ_bG_5zaBaa-bD0CWiD05qK3_t90-k&usqp=CAU" class="h-8 mr-3" alt="Flowbite Logo" />
      <div className="head">
      <span class="self-center text-3xl font-semibold whitespace-nowrap text-white">CodeWrite</span>
  </div>
  </div>
  <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-1 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="user photo"></img>
      </button>
      
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-100 dark:text-white">Stuti Pradhan</span>
          <span class="block text-sm  text-gray-100 truncate dark:text-gray-400">stutipradhan@gmail.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mob">
    <ul class="flex flex-col font-medium p-1 md:p-6 mt-4 bg-white/0 rounded-lg md:flex-row md:space-x-20 md:mt-0 md:border-0" id="mob2">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-cyan-100 rounded md:bg-transparent md:text-cyan-400 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:md:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Frameworks</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:md:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Challenges</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:md:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Log In</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:md:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign up</a>
      </li>
    </ul>
  </div>
  
</div>

</nav>
<div class="backdrop-blur-sm">
  <br></br>
  <br></br>
  <br></br>


        <div className='Left1'>
          <p className='text-4xl text-cyan-300'>
          Experience the Artistry of Code in Action
          </p>
          <p className='text-3xl text-cyan-500'>Explore, experiment and expand your skills with CodeWrite</p>
          <p className='text-0.5xl text-cyan-700'>
          Rapid HTML, CSS & JS Prototyping made easy!
          </p>
        </div>
       
     
        <div className='button1'>
        <a href="/CodeHome">
          <div class="inline-block rounded-xl bg-gradient-to-r from-blue-400 via-fuchsia-500 to-teal-500 p-1/8 pb-[1/8px] text-slate-50 text-xl font-medium transition ">
       
        <button type="button" class=" bg-black rounded-xl px-20 p-[5px] m-1 border-1 outline:none">  Start Coding...</button>
      </div>

</a>
</div>
</div>
        </div>
         <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> 

       {/* <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>     */}
     
      </div>
      {/* // FrameworkPage */}
      <div class="FrameworkPage">
           
      </div>
      </>
  );
}


export default navbar;
