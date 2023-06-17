import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import navbar from './components/navbar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <div className='land'>
      <div className='Menu'>
        <h1 className='head'>CodeWrite</h1>


        <navbar />
        <div className="Left1">
          <p className='text-4xl text-cyan-300'>Create,code with HTML,CSS and Javascript</p>
          <p className='text-3xl text-cyan-500'> Let our code do the magic.</p>
          <p className='text-0.5xl text-cyan-700'>Imagine it, believe it and let our code make it happen.</p>
        </div>
        <div className='button1'>
          <button href="/pen/" class="SidebarCreate_anonButton-NtSrZ"><span><pre>Start Coding...</pre></span></button>
        </div>
        {/* <p class="text-zinc-300 "><pre>Frameworks</pre></p> */}


      </div>

      {/* <div className='personal'>
     <button class="rounded-none border-2 border-white mt-5 ws-nowrap">SignIn</button>
     <button class="rounded-none border-2 border-white mt-5 ws-nowrap">Log In</button>
     <div class="shrink-0">
 <img class="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
</div>
    </div> */}
   </div>

 
  );
}

export default App;
