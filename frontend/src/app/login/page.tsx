"use client"
import { useState } from 'react';
import '../globals.css';

 

export default function Page () {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    
    const data = { username, password, email };

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
          <h2 className="text-4xl text-black">Login</h2>
        </div>
      </div>
      <form>
        <input value="https://jamstacker.studio/thankyou" type="hidden" name="_redirect"/>
        <div className="mt-4 space-y-6">
          <div className="col-span-full">
            <label className="block mb-3 text-md font-medium text-gray-600"> username </label>
            <input type="text" placeholder="username" className="block w-full px-6 py-3 text-black bg-white border-2 border-gray-400 rounded-full appearance-none placeholder:text-gray-200 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-2xl" onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-md font-medium text-gray-600"> Email </label>
            <input type="email" placeholder="youremail@example.com" className="block w-full px-6 py-3 text-black bg-white border-2 border-gray-400 rounded-full appearance-none placeholder:text-gray-200 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-2xl" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="col-span-full">
            <label className="block mb-3 text-md font-medium text-gray-600"> Password </label>
            <input type="password" placeholder="password" className="block w-full px-6 py-3 text-black bg-white border-2 border-gray-400 rounded-full appearance-none placeholder:text-gray-200 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-2xl" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="col-span-full">
            <button type="button" className="items-center justify-center w-1/2 px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-md focus-visible:ring-black" onClick={handleLogin}> Next! </button>
          </div>
        </div>
      </form>
      <a href='https://github.com/K4mp47'><button className="md:mt-8 sm:mt-4">
        <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </button>
      <h1>
        by K4mp47
      </h1>
      </a>
    </div>
  </div>
  <div className="wrapper">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
  </div>
  </div>
  )
}


