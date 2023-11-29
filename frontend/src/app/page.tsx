import Cursor from './Cursor';
import './globals.css';

async function load() {
  const response = await fetch('http://127.0.0.1:5000/api/users/4');
  
  if(!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  
  return data;
}


export default async function Page() {
  const user = await load();

  return (
    <div className="m-auto h-full flex flex-col justify-center content-center items-center text-center cursor-none">
      <Cursor />  
      <h1 className="mb-9 text-2xl md:text-8xl">Welcome to my To Do App, {user?.username}</h1>
      <h3 className="text-lg"> A BETTER version focus on YOU! </h3>
      <div className='flex'>
      <button className="mt-20 bg-black w-56 h-12 rounded-3xl m-6 flex justify-center items-center text-center pointer-events-auto hover:border-white"><a href='http://127.0.0.1:3000/login' className='w-full h-full text-white flex justify-center text-center items-center'>Login 
      </a></button>
      <button className="mt-20 bg-black w-56 h-12 rounded-3xl m-6 flex justify-center items-center text-center pointer-events-auto hover:border-white"><a href='http://127.0.0.1:3000/signup' className='w-full h-full text-white flex justify-center text-center items-center'>Sign Up 
      </a></button>
      </div>
      <button className='mt-6'><a href='https://github.com/K4mp47'>
        <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </a></button>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div>
  )
}
