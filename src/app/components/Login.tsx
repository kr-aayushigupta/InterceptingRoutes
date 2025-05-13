import React from 'react'

function Login() {
  return (
    <div className=''>
        <form className='flex flex-col items-center gap-4 text-2xl'>

           <label>Email :</label>  <input className='border-2 border-pink-400 text-black bg-white' type='email' name="email"/>
           <label>Password :</label>  <input className='border-2 border-pink-400 text-black bg-white' type='password' name="password"/>

            <button type='submit' className='bg-green-600 text-white hover:bg-green-700 hover:border-2 border-white px-4 py-2 rounded-md hover:cursor-pointer'>Submit</button>
        </form>
    </div>
  )
}

export default Login