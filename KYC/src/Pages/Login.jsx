import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const Navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("All Field Required")
            return
        }
        if (email == "admin" && password === "admin123") {
            setError("")
            Navigate("/basicdetail")
            alert("Welcome to Kyc")
        } else {
            setError("Invalid Candidate")
        }
    }

    return (
        <div>
            <div className="login-form  w-full h-screen flex items-center justify-center  ">
                <div className='bg-white shadow-lg rounded-xl p-8 w-full max-w-sm'>
                    <div className="flex justify-center mb-6">
                        <img src={Logo} width={200} height={60} />
                    </div>
                    <div className="space-y-4 text-center">
                        <label className=' text-2xl font-semibold text-gray-700'>Login</label><br />
                        <input className='w-full mt-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-none' type="text" placeholder='Email/Phone' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                        <input type="password" className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-none' placeholder='Pasword' value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                        <button onClick={handelSubmit} className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300'> Login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login