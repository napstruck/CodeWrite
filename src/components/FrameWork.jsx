import React from "react";
import { FaReact } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';

import "../App.css";
import { Box} from "@mui/material";

function FrameWork(){
    return (
        <Box>
        <div id="Framework" class="pt-10 backdrop-blur-sm pl-60 flex flex-row align-middle place-items-center">
     <div class="text-white flex flex-col p-10 mb-10" >
                   
     <button type="button" class="text-white inline-flex items-center justify-around text-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-20 py-4 text-center mr-2 mb-10"><FaReact />React</button>
    <button type="button" class="text-white inline-flex items-center justify-around bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-20 py-4 text-center mr-2 mb-10"><FaVuejs />Vue</button>
    <button type="button" class="text-white inline-flex items-center justify-around bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-20 py-4 text-center mr-2 mb-10"><SiTailwindcss />TailWind</button>
    <button type="button" class="text-white inline-flex items-center justify-around bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-20 py-4 text-center mr-2 mb-10"><FaSass />Sass</button>

                </div>
              
<div id="indicators-carousel" class="relative w-full" data-carousel="static">
   
    <div class="relative h-56 overflow-visible rounded-lg md:h-96">
         
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://images.unsplash.com/photo-1595931474671-aacb00377e46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="SORRY"></img>
        </div>
     
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://plus.unsplash.com/premium_photo-1674929041876-8c58c0a3f772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="SORRY"></img>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://images.unsplash.com/photo-1587279063133-e65e2d8b849f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="SORRY"></img>
        </div>
   
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1226&q=80" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="SORRY"></img>
        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://images.unsplash.com/photo-1496285705189-c290050257f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1264&q=80" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="SORRY"></img>
        </div>
    </div>
 
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
  
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

</div> 
            
            </Box>
    )
}
export default FrameWork;