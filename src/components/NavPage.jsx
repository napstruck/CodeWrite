function navbar() {
  return (
    <div className='land'>
      <div className='Menu'>
        <div className='head'> CodeWrite</div>
        <div className='Left1'>
          <p className='text-4xl text-cyan-300'>
            Create,code with HTML,CSS and Javascript
          </p>
          <p className='text-3xl text-cyan-500'> Let our code do the magic.</p>
          <p className='text-0.5xl text-cyan-700'>
            Imagine it, believe it and let our code make it happen.
          </p>
        </div>
        <div className='button1'>
          <a href='/CodeHome'>
            <button className='Buttonin'>
              <span>
                <pre>Start Coding...</pre>
              </span>
            </button>
          </a>
          {/* <button
  type="button"
  class="inline-block rounded-full border-2 border-info px-10 pb-[10px] text-slate-50 text-xl font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-image-linear-gradient(to right, rgb(228, 228, 26), rgb(202, 117, 187),rgb(103, 75, 169),rgb(16, 9, 194))1 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-info-600 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-100 active:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
>
  Start Coding...
</button> */}
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

export default navbar;
