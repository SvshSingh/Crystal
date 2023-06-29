import React from 'react'

export default function SignIn() {
    return (
        <div className='max-h-screen min-h-screen grid grid-cols-2'>
            <div className='login-forms col-span-1 grid items-center'>
                <div className=''>
                    <h1 className='text-4xl font-bold'>Welcome, back</h1>
                        <p className='login-form-heading font-medium my-2.5'>Login with your Crystal account</p>
                    <h3 className='login-sub-heading'>A Curated Photo <br /> Gallery</h3>
                    <div className='form grid grid-cols-1'>
                        <input className='input' type="text" placeholder='Enter email'/>
                        <input className='input' type="text" placeholder='Enter password'/>
                        {/* <input type="checkbox" /> Remenber me */}
                        <button className=''>LOGIN</button>
                    </div>
                </div>
            </div> 
            <div className='login-picture grid justify-items-center items-center'>
                <img 
                    className='min-height-screen' 
                    src="https://images.unsplash.com/photo-1580707221190-bd94d9087b7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                    alt="" />
            </div>
        </div>
    )
}
