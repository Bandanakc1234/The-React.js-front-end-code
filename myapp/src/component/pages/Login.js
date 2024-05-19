import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import { authenticate, userLogin } from '../../api/userApi'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosEye, IoIosEyeOff } from 'react-icons/io'

const Login = () => {
    const [formData, setFormData] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    let navigate = useNavigate()
   
    let { email, password } = formData

    const handleChange = (event) => {
        const {name, value} = event.target;
       setFormData({
        ...formData,
        [name]: value
       })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (email == null || password == null) {
            setError("Please enter all required fields")
        }
        else {
            userLogin(email, password)
                .then(data => {
                    if (data.error) {
                        setSuccess(false)
                        setError(data.error)
                    }
                    else {
                        setError('')
                        setSuccess(true)
                        // setFormData({
                        //     email: "",
                        //     password: ""
                        // })
                        // authenticate(data)
                    }
                })
                .catch(error => console.log(error))
        }
    }

    const showError = () => {
        if (error) {
            Swal.fire({
                icon: "error",
                toast: true,
                title: "error",
                text: error,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                color: "#d33"
            })
            setError('')
        }
    }
    const showSuccess = () => {
        if (success) {
            Swal.fire({
                icon: "success",
                toast: true,
                title: "success",
                text: 'login success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                color: "#64DD17"
            })
            setSuccess('')
            navigate("/")
        }
    }
    return (
        <>
            <Navbar />
            {showError()}
            {showSuccess()}
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">LogIn</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email / Username</label>
                            <div class="mt-2">
                                <input id="email" name="email" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange}/>
                            </div>
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div class="mt-2 relative">
                                <input id="password" name="password" type={showPassword ? "text" : "password"}  autocomplete="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={password} onChange={handleChange} />
                                {showPassword ? <IoIosEye type="button"
                                        aria-label={
                                            showPassword ? "Password Visible" : "Password Invisible."
                                        }
                                        onClick={() => {
                                            setShowPassword((prev) => !prev)
                                        }}
                                        className='absolute right-2 top-0 translate-y-1/2 text-xl' /> : <IoIosEyeOff type="button"
                                            aria-label={
                                                showPassword ? "Password Visible" : "Password Invisible."
                                            }
                                            onClick={() => {
                                                setShowPassword((prev) => !prev)
                                            }}
                                            className='absolute right-2 top-0 translate-y-1/2 text-xl' />}
                            </div>
                        </div>

                        <div>
                            <Link to="">
                            <button onClick={handleSubmit} type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                            </Link>
                            <p>Don't have an account? <Link to={"/signup"} className='text-blue-500 font-semibold text-sm md:text-md'>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login