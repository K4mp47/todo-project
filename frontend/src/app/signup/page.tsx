"use client"
import { useState } from 'react';

import '../globals.css';

 

export default function Page () {
  
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    
    const data = { password, email }; // data for post create user account

    try {
      const response = await fetch('http://127.0.0.1:5000/api/users', {
        method: 'POST',
        headers: {

          'Content-Type': 'application/json',
          'mode': 'no-cors',
        },
        body: JSON.stringify(data)
      });
    
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const responseFinal = await response.json();
      console.log(responseFinal, data);
    } catch (error) {
    
    }

  }

  return (
  <div className="bg-white h-full flex flex-col justify-center content-center items-center text-center ">
  <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl rounded-lg">
    <div className="w-full border-gray-700 border-2 rounded-3xl max-w-md mx-auto md:max-w-sm md:p-8 md:w-96 sm:p-4 shadow-[5px_5px_0px_0px_rgba(97,97,97)]">
      <div className="flex flex-col">
        <div>
          <h2 className="text-4xl text-black">Sign Up</h2>
        </div>
      </div>
      <form>
        <input value="https://jamstacker.studio/thankyou" type="hidden" name="_redirect"/>
        <div className="mt-4 space-y-6">
          <div className="col-span-full">
            <label className="block mb-3 text-md font-medium text-gray-600"> Email </label>
            <input type="email" placeholder="youremail@example.com" className="block w-full px-6 py-3 text-black bg-white border-2 border-gray-400 rounded-full appearance-none placeholder:text-gray-200 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-2xl" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-md font-medium text-gray-600"> Password </label>
            <input type="password" placeholder="password" className="block w-full px-6 py-3 text-black bg-white border-2 border-gray-400 rounded-full appearance-none placeholder:text-gray-200 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-2xl" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="col-span-full">
            <button type="button" className="items-center justify-center w-1/2 px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-md focus-visible:ring-black" onClick={handleLogin}> LET'S DO IT </button>
          </div>
        </div>
      </form>
      <h1 className='mt-8'>
        by K4mp47
      </h1>
    </div>
  </div>
  <div className="loader relative">
    <div className="square" id="sq1"></div>
    <div className="square" id="sq2"></div>
    <div className="square" id="sq3"></div>
    <div className="square" id="sq4"></div>
    <div className="square" id="sq5"></div>
    <div className="square" id="sq6"></div>
    <div className="square" id="sq7"></div>
    <div className="square" id="sq8"></div>
    <div className="square" id="sq9"></div>
  </div> 
  </div>
  )
}
