import React from 'react'
import { Link } from 'react-router-dom'
// import { authenticate } from '../../api/userApi'

const Navbar = () => {
    // let {user} = authenticate()

    return (
        <>
            <div className='bg-blue-950'>
                <div className='flex justify-between md:p-5 p-2 text-white'>
                    <div className='text-2xl font-bold md:ml-6 ml-2'>
                        <Link className="" to="/">Authentication System</Link>
                    </div>
                    <div className='mt-3'>
                        {/* {
                        !user && <> */}
                        <Link className="md:mr-16 mr-3" to="/login">Login</Link>
                        <Link className="md:mr-8" to="/signup">Register</Link>
                        {/* </> */}
                        {/* }
                        {
                            user &&<>
                            <Link className="md:mr-8" to="/logout">Logout</Link>
                            </>
                        } */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar