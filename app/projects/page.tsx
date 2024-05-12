import React from 'react'

const Page = () => {
    return (
      <main className="w-screen h-screen relative">
          <div className='flex items-center justify-center w-full h-full bg-cover bg-center' style={{backgroundImage: "url(/assets/main-bg.webp)"}} >
              <div className='flex flex-row items-center bg-purple-800 p-20 rounded bg-gradient-to-r from-purple-500 to-cyan-500'>
                  <h1 className='text-red-800 font-extrabold'>
                      Hi sorry, project section is still in progress
                  </h1>
              </div>
          </div>
      </main>
    )
  }
  
  export default Page