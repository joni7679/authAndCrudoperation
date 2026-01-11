import { User } from 'lucide-react'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Header = () => {
    const { logOutUser } = useContext(AuthContext);

    // handelLogout
    const handelLogout = () => {
        const confirm = window.confirm("Are U Sure U Went To Log out!")
        if (confirm) {
            logOutUser()
        }
    }

    // useEffect(() => {
    //     
    // }, [])
    return (
        <>
            <header className='w-full flex items-center justify-between p-5 shadow-md bg-white'>
                <div>
                    <h1 className='font-semibold capitalize'>wellcome to</h1>
                </div>
                <div>
                    <div className='user-icon w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center relative group cursor-pointer hover:bg-gray-400 duration-150'>
                        <User className='text-2xl' />
                    </div>
                    <div >
                        <button onClick={handelLogout} className='py-2 px-3 rounded-2xl bg-red-600 text-white capitalize cursor-pointer hover:bg-red-900 duration-300'>logout</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
