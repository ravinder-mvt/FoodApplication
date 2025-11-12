import React, { Children } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
    return (
        <div className='flex flex-col mx-auto max-w-7xl min-h-screen'>
            <header>
                <Navbar />
            </header>
            <main className='flex items-center  flex-1 justify-between'>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout