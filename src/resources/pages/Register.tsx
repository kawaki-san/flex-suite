import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { auth } from '../../firebaseConfig'

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const registerAccount = (e: any): void => {
        e.preventDefault();
        if (!name) {
            return alert("Please enter your name");
        }
        if (!email) {
            return alert("Please enter your email");
        } if (!password) {
            return alert("Please enter your password");
        } if (!password2) {
            return alert("Please re-enter your password");
        }
        if (password.match(password2)) {
            auth.createUserWithEmailAndPassword(email, password)
                .then((authUser) => {
                    console.log("Email:", authUser.user?.email)
                    dispatch((login({
                        email: authUser.user?.email,
                        uid: authUser.user?.email,
                        displayName: name
                    })))

                }).catch(error => alert(error.message));
        }


    }

    return (
        <div>
            <form className="mx-auto md:w-1/3 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Please Create an Account Below</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Admin Panel</p>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" name="repassword" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="repassword" className="leading-7 text-sm text-gray-600">Repeat Password</label>
                    <input value={password2} onChange={e => setPassword2(e.target.value)} type="password" id="repassword" name="repassword" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" type='submit' onClick={registerAccount}>Create Account</button>
            </form>
        </div>
    )
}

export default Register
