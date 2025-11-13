import React, { Children } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
const Layout = ({ children }) => {
    return (
        <div className='flex flex-col mx-auto'>


            <div className='flex flex-col mx-auto w-[80%] min-h-screen'>
                <header>
                    <Navbar />
                </header>
                <Login />
                <SignUp/>
                <main className='flex flex-1 w-full items-center justify-center'>
                    {children}
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout